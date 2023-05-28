import * as dotenv from "dotenv"
dotenv.config()

import algoliasearch from "algoliasearch"
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
)

// 1. Build a dataset
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import removeMd from "remove-markdown"

const filenames = fs.readdirSync(path.join("./src/pages/insights"))
const data = filenames.map(filename => {
  try {
    const markdownWithMeta = fs.readFileSync("./src/pages/insights/" + filename)
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      url:  filename.replace(/\.mdx$/, ''),
      objectID: filename.replace(/\.mdx$/, ''),
      title: frontmatter.title,
      tags: frontmatter.tags,
      insightNo: frontmatter.insightNo,
      content: removeMd(content).replace(/\n/g, ""),
    }
  } catch (e) {
    console.log(e.message)
  }
})


// 2. Send the dataset in JSON format
const index = client.initIndex('Insights - SoGS');

index.saveObjects(data)
  .then(({ objectIDs }) => {
    console.log("Algolia: All records have been imported");
  })
  .catch(err => {
    console.error(err);
  });
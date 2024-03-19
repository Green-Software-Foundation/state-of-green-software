import * as dotenv from "dotenv";
dotenv.config();

import algoliasearch from "algoliasearch";
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import removeMd from "remove-markdown";

// Function to process files in a given insights directory
function processInsightsDirectory(directory) {
  const filenames = fs.readdirSync(path.join(directory));
  const data = filenames.map((filename) => {
    try {
      const fullPath = path.join(directory, filename);
      const markdownWithMeta = fs.readFileSync(fullPath);
      const { data: frontmatter, content } = matter(markdownWithMeta);
      const language = directory.split('/')[3];
      return {
        url: filename.replace(/\.mdx?$/, ''),
        objectID: language + " - " + filename.replace(/\.mdx?$/, ''),
        title: frontmatter.title,
        tags: frontmatter.tags,
        insightNo: frontmatter.insightNo,
        content: removeMd(content).replace(/\n/g, ""),
        language
      };
    } catch (e) {
      console.log(e.message);
    }
  });
  return data;
}

// 1. Build datasets for each language
const englishInsights = processInsightsDirectory("./src/pages/en/insights/");
const japaneseInsights = processInsightsDirectory("./src/pages/ja/insights/");

// Combine the insights from both languages
const combinedData = [...englishInsights, ...japaneseInsights];

// 2. Send the combined dataset in JSON format
const index = client.initIndex('Insights - SoGS');

index.saveObjects(combinedData)
  .then(({ objectIDs }) => {
    console.log("Algolia: All records have been imported");
  })
  .catch(err => {
    console.error(err);
  });

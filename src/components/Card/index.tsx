import type { Insight } from "../types";
import Styles from "./styles.module.css";
type Props = {
  insight: Insight;
};
const tagsNames: {
  [key: string]: string;
} = {
  Culture: "culture",
  Knowledge: "knowledge",
  Tools: "tools",
  "文化": "culture",
  "知識": "knowledge",
  "ツール": "tools"
}
const Card = ({ insight: { url, title, tags } }: Props) => {
  return (
    <a className={Styles.wrapper} href={url}>
      <div className={`${Styles.container} hover:border-primary`}>
        <div className={Styles.tags}>
          {tags?.map((tag: string) => (
            <span
              key={tag}
              className={Styles.tag}
              style={{
                backgroundColor: `var(--tag-${tagsNames[tag]})`,
                color: `var(--tag-${tagsNames[tag]}-text)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className={`text-secondary ${Styles.title}`}>{title}</h2>
      </div>
    </a>
  );
};
export default Card;

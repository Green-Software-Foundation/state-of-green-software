import type { Insight } from "../types";
import Styles from "./styles.module.css";
type Props = {
  url: string;
  insight: Insight;
};
const Card = ({ url, insight: { title, tags } }: Props) => {
  return (
    <a className={Styles.wrapper} href={url}>
      <div className={Styles.container}>
        <div className={Styles.tags}>
          {tags?.map((tag) => (
            <span
              key={tag}
              className={Styles.tag}
              style={{
                backgroundColor: `var(--tag-${tag.toLowerCase()})`,
                color: `var(--tag-${tag.toLowerCase()}-text)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className={Styles.title}>{title}</h2>
      </div>
    </a>
  );
};
export default Card;

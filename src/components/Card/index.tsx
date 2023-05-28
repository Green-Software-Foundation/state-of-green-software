import type { Insight } from "../types";
import Styles from "./styles.module.css";
type Props = {
  insight: Insight;
};
const Card = ({ insight: { url, title, tags } }: Props) => {
  return (
    <a className={Styles.wrapper} href={url}>
      <div className={`${Styles.container} hover:border-primary`}>
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
        <h2 className={`text-secondary ${Styles.title}`}>{title}</h2>
      </div>
    </a>
  );
};
export default Card;

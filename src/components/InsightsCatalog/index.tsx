import { useState } from "react";
import Card from "../Card";
import Styles from "./styles.module.css";

import type { MarkdownInstance } from "astro";
import type { Insight } from "../types";
type Props = {
  insights: MarkdownInstance<Insight>[];
};
const InsightsCatalog = ({ insights }: Props) => {
  return (
    <section className={Styles.container}>
      {/* <h2 className={Styles.title}>Insights</h2> */}
      {/* <div>
        <div className={Styles.input_wrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            type="text"
            placeholder="Search insights..."
            // onChange={onSearch}
          />
        </div>
      </div> */}
      <div className={Styles.cards_wrapper}>
        {insights.map(({ url, frontmatter: insight }) => {
          if (url === undefined) return;
          return <Card key={insight.title} url={url} insight={insight} />;
        })}
      </div>
      {/* <div className={Styles.btn_wrapper}>
        <button className="button outline">View All speakers</button>
      </div> */}
    </section>
  );
};
export default InsightsCatalog;

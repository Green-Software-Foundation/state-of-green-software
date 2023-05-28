import { useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, PoweredBy, Hits, RefinementList } from 'react-instantsearch-hooks-web';

import Card from "../Card";
import Styles from "./styles.module.css";
import CardStyles from "../Card/styles.module.css";

import type { Insight } from "../types";

const searchClient = algoliasearch('SWCMJQWWC9', '7177f1ae5c3725e4c33f26a69eeeaa90');
const Hit = ({ hit }: {
  hit: Insight
}) =>
  <Card insight={{ url: `/insights/${hit.url}`, title: hit.title, tags: hit.tags, insightNo: hit.insightNo }} />
const InsightsCatalog = () => {
  return (
    <section className={Styles.container}>
      <InstantSearch searchClient={searchClient} indexName="Insights - SoGS">
        <SearchBox
          placeholder="Search insights..."
          resetIconComponent={() => (
            <></>
          )}
          loadingIconComponent={() => (
            <p>Loading...</p>
          )}
          submitIconComponent={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-secondary"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          )}
          className={Styles.input_wrapper}
        />
        <div className="max-w-xl mx-auto mb-4 flex items-center justify-between">
          <RefinementList
            attribute="tags"
            sortBy={['name:asc']}
            classNames={{
              list: 'flex flex-wrap gap-2',
              checkbox: 'hidden',
              label: 'border p-2 px-1.5 py-0.5 rounded text-xs font-bold flex items-center justify-center',
              count: 'hidden',
              selectedItem: 'bg-gray-200 rounded'
            }}
          />
          <PoweredBy className="w-28 mr-3" />
        </div>
        <Hits hitComponent={Hit} classNames={
          {
            list: Styles.cards_wrapper,
          }
        } />
      </InstantSearch>

    </section>
  );
};
export default InsightsCatalog;

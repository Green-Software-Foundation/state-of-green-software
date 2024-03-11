import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, PoweredBy, Hits, RefinementList } from 'react-instantsearch-hooks-web';
import Card from "../Card";
import Styles from "./styles.module.css";

import type { Insight } from "../types";

const searchClient = algoliasearch('SWCMJQWWC9', '7177f1ae5c3725e4c33f26a69eeeaa90');
const Hit = ({ hit }: {
  hit: Insight
}) =>
  <Card insight={{ url: `insights/${hit.url}`, title: hit.title, tags: hit.tags, insightNo: hit.insightNo }} />
const InsightsCatalog = () => {
  return (
    <section className={Styles.container}>
      <InstantSearch searchClient={searchClient} indexName="Insights - SoGS">
        <SearchBox
          placeholder="Search insights..."
          classNames={
            {
              form: 'relative',
              loadingIndicator: 'absolute right-16 top-7 ',
            }
          }
          resetIconComponent={() => (
            <></>
          )}
          loadingIconComponent={() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="text-secondary" viewBox="0 0 38 38">
              <defs>
                <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                  <stop stopColor="currentColor" stopOpacity="0" offset="0%" />
                  <stop stopColor="currentColor" stopOpacity=".631" offset="63.146%" />
                  <stop stopColor="currentColor" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)">
                  <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
                  </path>
                  <circle fill="currentColor" cx="36" cy="18" r="1">
                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                </g>
              </g>
            </svg>
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
            className='h-[22px]'
            classNames={{
              list: 'flex flex-wrap gap-2',
              checkbox: 'hidden',
              label: 'border p-2 px-1.5 py-0.5 rounded text-xs font-bold flex items-center justify-center cursor-pointer',
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

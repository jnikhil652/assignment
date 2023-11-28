import { searchClient, searchIndex } from "@/utils/algolia";
import styles from "../../styles/Home.module.css";
// import { isEmpty } from "lodash";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  HitsProps,
} from "react-instantsearch";
export type Prop = {
  posts: any;
};
export type Post = {
  title: string;
  body: string;
};
function Hit({ hit }: any) {
  return (
    <div className="hit-container">
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <h5 className="Hit-price">{hit.title}</h5>
      <p className="Hit-price">{hit.body}</p>
    </div>
  );
}
function HomeComponent({ posts }: any) {
  console.log({ posts });

  return (
    <div style={{ display: "flex", color: "black" }}>
      <InstantSearch
        searchClient={searchClient}
        indexName={searchIndex}
        routing={true}
        insights={true}
      >
        <div className="main-container">
          <div className="sub-container">
            <SearchBox autoFocus />
          </div>
          <div className="sub-container">
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default HomeComponent;

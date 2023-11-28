import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
  "B3XLEUJPNB",
  "dc05f9c25cd3dac37556bfd18eec55ad"
);

const searchIndex = "blog_posts_2";

export { searchClient, searchIndex };

import HomeComponent from "@/containers/Home";
import getBlogPosts from "@/utils";
import { searchClient, searchIndex } from "@/utils/algolia";
import { randomUUID } from "crypto";
// import { getBlogPosts } from "@/serverFunctions";

const Home = ({ posts }: any) => {
  return <HomeComponent posts={posts} />;
};

export async function getServerSideProps() {
  const posts = await getBlogPosts();
  const simplifiedData = posts.map((item: any, i: number) => {
    const title =
      item.fields.title?.content?.[0]?.content?.[0]?.value
        ?.replace("title:", "")
        .trim() || "";
    const body = item.fields.body?.content?.[0]?.content?.[0]?.value || "";

    return {
      objectID: item.sys.id,
      title,
      body,
    };
  });

  console.log(simplifiedData);
  // Push data to Algolia
  await searchClient.initIndex(searchIndex).saveObjects(simplifiedData).wait();

  return {
    props: {
      posts: simplifiedData,
    },
  };
}

export default Home;

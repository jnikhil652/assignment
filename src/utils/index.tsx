import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE as string,
    });

    return response.items;
  } catch (error) {
    console.error("Error retrieving blog posts:", error);
    // Handle the error as needed
    return [];
  }
};

export default getBlogPosts;

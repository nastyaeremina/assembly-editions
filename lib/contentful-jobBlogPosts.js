import { NO_OF_JOBS_PER_PAGE } from "./constants";
import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_JOB_BLOG_POST_DETAILS_FIELDS = `
name
author
date
blogLink
`;

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.jobBlogPostsCollection?.items;
}

export async function getAllJobBlogPosts(preview) {
    const entries = await fetchGraphQL(
        `query {
            jobBlogPostsCollection(order:[order_ASC],preview: ${preview ? "true" : "false"
        }) {
        items {
          ${POST_GRAPHQL_JOB_BLOG_POST_DETAILS_FIELDS}
        }
      }
    }`,
        preview
    );

    return extractPostEntries(entries);
}
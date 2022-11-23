import { NO_OF_JOBS_PER_PAGE } from "./constants";
import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_JOB_DETAILS_FIELDS = `
name
slug
department
location
isRemote
jobDescription{
    json
}
applyLink   
teamMembersCollection{
    items{
        name
        profileLink
        profilePicture{
            url
        }
    }
}
`;

const POST_GRAPHQL_JOB_LIST_FIELDS = `
name
slug
department
location
isRemote
`;
const POST_GRAPHQL_JOB_IMAGES_LIST_FIELDS = `
name
image{
    url
}
`;

function extractPostEntry(fetchResponse) {
    return fetchResponse?.data?.jobListingsCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.jobListingsCollection?.items;
}

export async function getAllJobs(skip, preview) {
    const entries = await fetchGraphQL(
        `query {
            jobListingsCollection(skip:${skip},limit:${NO_OF_JOBS_PER_PAGE},preview: ${preview ? "true" : "false"
        }) {
        items {
          ${POST_GRAPHQL_JOB_LIST_FIELDS}
        }
      }
    }`,
        preview
    );

    return extractPostEntries(entries);
}

export async function getJobDetails(slug, preview) {
    const entries = await fetchGraphQL(
        `query {
            jobListingsCollection(where:{slug:"${slug}"},preview: ${preview ? "true" : "false"
        }) {
        items {
          ${POST_GRAPHQL_JOB_DETAILS_FIELDS}
        }
      }
    }`,
        preview
    );
    return extractPostEntry(entries);
}

export async function getAllJobImages(preview) {
    const entries = await fetchGraphQL(
        `query {
            jobImagesCollection(preview: ${preview ? "true" : "false"
        }) {
        items {
          ${POST_GRAPHQL_JOB_IMAGES_LIST_FIELDS}
        }
      }
    }`,
        preview
    );

    return entries?.data?.jobImagesCollection?.items;
}
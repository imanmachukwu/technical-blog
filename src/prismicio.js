import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from '@prismicio/next';
import fetch from 'cross-fetch';


export const repositoryName =
  process.env.PRISMIC_REPOSITORY_NAME;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */

const routes = [
  {
    type: 'Index',
    path: '/',
  },
  {
    type: 'technicalpost',
    path: '/:uid',
  },
];

const retryFetch = async (url, options, retries = 3, backoff = 300) => {
  try {
    const response = await fetch(url, { ...options, timeout: 30000 })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return response
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, backoff))
      return retryFetch(url, options, retries - 1, backoff * 2)
    }
    throw error
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch: async (url, options) => {
      //console.time(`Prismic request to ${url}`)
      try {
        const response = await retryFetch(url, options)
        //console.timeEnd(`Prismic request to ${url}`)
        return response
      } catch (error) {
        //console.timeEnd(`Prismic request to ${url}`)
        console.error(`Error fetching from Prismic: ${error}`)
        throw error
      }
    },
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

export function linkResolver(doc) {
  switch (doc.type) {
      case 'Index':
          return '/'
      case 'technicalpost':
          return `/${doc.uid}`
      default:
          return '/'
  }
}

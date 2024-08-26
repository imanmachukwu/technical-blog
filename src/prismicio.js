import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from '@prismicio/next'
import config from "../slicemachine.config.json";


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
    type: 'colophon',
    path: '/colophon',
  },
  {
    type: 'project',
    path: '/project/:uid',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(process.env.PRISMIC_REPOSITORY_NAME, {
    routes,
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

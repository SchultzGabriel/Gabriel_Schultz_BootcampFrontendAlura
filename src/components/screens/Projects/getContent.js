/* eslint-disable import/prefer-default-export */
import { CMSGraphQLprojects, gql } from '../../../infra/cms/cmsGraphQLProjects';

export async function getContent() {
  const query = gql`
    query {
      allProjetos {
        title
        link
        slug
        image
      }
    }
   `;

  const client = CMSGraphQLprojects();

  const response = await client.query({ query });

  return response.data.projects;
}

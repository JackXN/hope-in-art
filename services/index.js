import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getProducts = async () => {
    const query = gql `
    query MyQuery {
        product(where: {id: ""}, locales: en, stage: DRAFT) {
          categories(first: 10, orderBy: publishedAt_ASC) {
            id
            name
            products {
              images {
                createdAt
              }
            }
          }
        }
      }
    
    `
}



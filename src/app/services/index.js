import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH;

const graphQLclient = new GraphQLClient(endpoint)

export const heroSection = async () => {
    const query = gql`
    query Heroes {
        heroes {
          heading
          heroText
          semiHead
          heroImage {
            url
          }
        }
      }
      
`;
    const response = await graphQLclient.request(query);
    return response

}

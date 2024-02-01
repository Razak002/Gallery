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

export const offerList = async () => {
  const query = gql`
  query offerList {
    offers {
      offerTitle
      description
      offerIcon {
        url
      }
    }
  }
  
  `

  const response = await graphQLclient.request(query);
  return response
}

export const Blogs = async () =>{
  const query = gql`
  query Blogs {
    blogs {
      blogImage {
        url
      }
      blogtitle
      blogdescription
    }
  }
  
  `
const response = await graphQLclient.request(query);
return response

}
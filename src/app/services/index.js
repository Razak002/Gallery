import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH;

const graphQLclient = new GraphQLClient(endpoint)

export const queryHomePage = async () => {
  const query = gql`
    query HomePage {
        heroes {
          heading
          heroText
          semiHead
          heroImage {
            url
          }
        }
        offers {
          offerTitle
          description
          offerIcon {
            url
          }
        }
        blogs {
          blogdescription
          blogtitle
          blogImage {
            url
          }
          completeDesc {
            text
          }
          slug
          read
        }
      ctas {
        ctaText
        head
      }
      questions {
        questAns
        questText
      }
    }
 `
  const response = await graphQLclient.request(query);
  return response

}

export const getSingleBlog = async (slug) => {
  const query = gql`
  query getSingleBlog($slug: String) {
    blog(where: {slug: $slug}) {
      blogtitle
      blogdescription
      blogImage {
        url
      }
      completeDesc {
        html
      }
    }
  }
  `
  const slugName = {
    slug,

  }

  const response = await graphQLclient.request(query, slugName)
  return response
}


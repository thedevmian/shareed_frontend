import { gql, useQuery } from "@apollo/client";

const CURRENT_USER = gql`
  query CURRENT_USER {
    authenticatedItem {
      ... on User {
        id
        name
        email
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER);
  console.log(data);
  return data?.authenticatedItem;
}

export { CURRENT_USER };

import { gql, useQuery } from "@apollo/client";

    // # TODO: add query
const CURRENT_USER = gql`
    query CURRENT_USER {
        currentUser {
            id
            email
            name
        }
    }
    `;


export function useUser() {
    const { data, loading, error } = useQuery(CURRENT_USER);
    return { data, loading, error };
}

export { CURRENT_USER };

        
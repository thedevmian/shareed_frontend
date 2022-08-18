import { useCurrentUserQuery } from "@/graphql/types";

export function useUser() {
  const { data } = useCurrentUserQuery();
  return data?.authenticatedItem;
}

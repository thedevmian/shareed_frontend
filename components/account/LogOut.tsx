import { useSingOutMutation } from "@/graphql/types";
import Router from "next/router";

const LogOut = () => {
  const [logOutUser, {client}] = useSingOutMutation({
    update(cache) {
      cache.evict({
        fieldName: "authenticatedItem",
      });
      Router.push("/");
    },
  });

  const handleLogOut = async () => {
    await logOutUser();
    client.resetStore();
  };

  return (
    
};

export default LogOut;

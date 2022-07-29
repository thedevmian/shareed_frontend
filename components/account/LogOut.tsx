import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Router from "next/router";

const LOG_OUT = gql`
  mutation LOG_OUT {
    endSession
  }
`;

const LogOut = () => {
  const [logOutUser] = useMutation(LOG_OUT, {
    update(cache) {
      cache.evict({
        fieldName: "authenticatedItem",
      });
      Router.push("/");
    },
  });

  const handleLogOut = async () => {
    await logOutUser();
  };

  return <button onClick={handleLogOut}>Log Out</button>;
};

export default LogOut;

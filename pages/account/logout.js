import Router from "next/router";
import LogOut from "../../components/account/LogOut";
import { wait } from "../../utils/wait";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const LOG_OUT = gql`
  mutation LOG_OUT {
    endSession
  }
`;

const LogOutPage = () => {
  const [logOutUser] = useMutation(LOG_OUT, {
    update(cache) {
      cache.evict({
        fieldName: "authenticatedItem",
      });
    },
  });

  if (Router.pathname !== "/account/logout") {
    return null;
  } else {
    logOutUser();
    wait(1000).then(() => {
      return (
        <div>
          <span>Loading ...</span>
        </div>
      );
    });
  }
};

export default LogOutPage;

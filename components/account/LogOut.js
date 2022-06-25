import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { CURRENT_USER } from "../../hooks/useUser";

const LOG_OUT = gql`
  mutation LOG_OUT {
    endSession {
      message
    }
  }
`;

const LogOut = () => {
  const [logOut] = useMutation(LOG_OUT, {
    refetchQueries: [{ query: CURRENT_USER }],
  });

  return ( <button onClick={() => logOut()}>Log Out</button> );
};

export default LogOut;

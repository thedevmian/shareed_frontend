import { useSingOutMutation } from "@/graphql/types";
import Router from "next/router";
import { useEffect } from "react";
import { wait } from "lib/wait";

const SignOut = () => {
  const [signOutUser] = useSingOutMutation({
    update(cache) {
      cache.evict({
        fieldName: "authenticatedItem",
      });
    },
  });

  useEffect(() => {
    const lougout = async () => {
      await signOutUser();
      wait(2000).then(() => {
        console.log("logout");
        Router.push("/");
      });
    };

    lougout();
  });

  return (
    <div>
      <span>You are now logged out</span>
      <p>Please wait. You'll be redirected to the home page shortly.</p>
    </div>
  );
};

export default SignOut;

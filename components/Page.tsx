import PropTypes from "prop-types";
import Router from "next/router";
import NProgress from "nprogress";
import PageLayout from "../styles/PageLayout";
import { MenuProvider } from "../state/Menu";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollPosition } from "../hooks/useScrollPosition";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

export default function Page({ children }: { children: React.ReactNode }) {
  const { visible } = useScrollPosition();

  return (
    <PageLayout>
      <MenuProvider>
        <Navbar sticky={visible} />
      </MenuProvider>
      {children}
      <Footer />
    </PageLayout>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

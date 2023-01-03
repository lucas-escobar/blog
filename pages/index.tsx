import type { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <div>HomePage</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;

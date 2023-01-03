import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <div>About</div>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;

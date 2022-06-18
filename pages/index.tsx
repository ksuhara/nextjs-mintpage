import type { NextPage } from "next";
import { Header } from "../component/Header";
import { Layout } from "../component/Layout";
import { Sale } from "../component/Sale";

const Home: NextPage = () => {
  return (
    <Layout>
      <Sale />
    </Layout>
  );
};

export default Home;

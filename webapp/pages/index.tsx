import { ReactNode } from "react";
import Layout_Web2 from "../components/layout_web2";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout_Web2>{page}</Layout_Web2>;
};

export default Home;

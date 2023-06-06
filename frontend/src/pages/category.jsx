import { Outlet, Link, useLoaderData } from "react-router-dom";
import Layout from "../layout";
import artData from "../testData/artData.json";

const Category = () => {
  const data = useLoaderData();
  return (
    <Layout>
      <div id="detail">
        <Outlet />
      </div>
    </Layout>
  );
};

export default Category;

export function loader() {
  return artData;
}

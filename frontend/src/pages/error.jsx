import Layout from "../layout";

const Error = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-[42rem] gap-4">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <h1 className="italic">The page was not found</h1>
      </div>
    </Layout>
  );
};

export default Error;

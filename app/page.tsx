import CreateNames from "./_components/CreateNames";
import GetNames from "./_components/GetNames";
const page = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-5xl">This is the home page</h1>
      <CreateNames />
      <GetNames />
    </div>
  );
};

export default page;

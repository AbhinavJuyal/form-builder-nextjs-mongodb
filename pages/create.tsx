import { Slide, Settings, Preview, NavBar } from "@components/CreatePage";

const Create = () => {
  return (
    <div className="w-full h-full grid grid-rows-[min-content_auto] grid-cols-[250px_auto_250px]">
      <div className="col-span-3">
        <NavBar />
      </div>
      <Preview />
      <Slide />
      <Settings />
    </div>
  );
};

export default Create;

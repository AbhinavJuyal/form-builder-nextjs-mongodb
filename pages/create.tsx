import { Slide, Settings, Preview } from "@components/CreatePage";

const Create = () => {
  return (
    <div className="w-full h-full">
      <Preview />
      <Slide />
      <Settings />
    </div>
  );
};

export default Create;

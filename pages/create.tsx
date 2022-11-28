import { Slide, Settings, Preview } from "@components/CreatePage";

const Create = () => {
  return (
    <div className="w-full h-full grid grid-cols-[min-content_auto_min-content]">
      <Preview />
      <Slide />
      <Settings />
    </div>
  );
};

export default Create;

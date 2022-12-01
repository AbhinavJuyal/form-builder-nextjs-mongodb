import { Slide, Settings, Preview } from "@components/CreatePage";
import useStore from "app-client/store";

const Create = () => {
  return (
    <div className="w-full h-full grid grid-cols-[250px_auto_250px]">
      <Preview />
      <Slide />
      <Settings />
    </div>
  );
};

export default Create;

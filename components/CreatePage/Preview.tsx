import useStore from "app-client/store";
import { IFormItem } from "types";
import CreateSlideBtn from "./CreateSlideBtn";
import PreviewCard from "./PreviewCard";

const Preview = () => {
  const { componentData } = useStore();
  return (
    <div className="h-full py-10 px-6 highlight-bg text-white">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-2xl text-white font-semibold">Preview</h4>
        <CreateSlideBtn />
      </div>
      {componentData.map((component: IFormItem, index: number) => (
        <PreviewCard key={component.id} component={component} index={index} />
      ))}
    </div>
  );
};

export default Preview;

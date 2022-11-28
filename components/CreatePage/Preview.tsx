import useStore from "app-client/store";
import { IFormItem } from "types";
import PreviewCard from "./PreviewCard";

const Preview = () => {
  const { componentData } = useStore();
  return (
    <div className="h-full py-10 px-6 highlight-bg">
      {componentData.map((component: IFormItem) => (
        <PreviewCard key={component.id} component={component} />
      ))}
    </div>
  );
};

export default Preview;

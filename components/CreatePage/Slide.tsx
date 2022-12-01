import useStore from "app-client/store";
import dynamic from "next/dynamic";
import { IFormItem } from "types";

const FormComponentHOC = dynamic(() => import("hoc/FormComponentHOC"), {
  ssr: false,
});

const Slide = () => {
  const { componentData, activeIdx } = useStore();
  const { question, options, type }: IFormItem = componentData[activeIdx];
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-full max-w-6xl max-h-[600px] max-h-sm bg-white flex justify-center items-center">
        <div className="w-full max-w-md">
          <FormComponentHOC
            edit={true}
            component={componentData[activeIdx]}
            activeIdx={activeIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;

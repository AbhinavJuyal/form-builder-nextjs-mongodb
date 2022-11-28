import useStore from "app-client/store";
import dynamic from "next/dynamic";
import { IFormItem } from "types";

const FormComponentHOC = dynamic(() => import("hoc/FormComponentHOC"), {
  ssr: false,
});

const Slide = () => {
  const { componentData, activeComponent } = useStore();
  const { question, options, type }: IFormItem = componentData[activeComponent];
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-full max-w-6xl max-h-[600px] max-h-sm bg-white flex justify-center items-center">
        <div className="w-full max-w-md">
          <FormComponentHOC
            edit={true}
            component={componentData[activeComponent]}
            activeComponent={activeComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;

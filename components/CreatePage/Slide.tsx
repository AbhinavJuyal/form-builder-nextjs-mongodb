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
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-md h-auto">
        <FormComponentHOC
          edit={true}
          component={componentData[activeComponent]}
        />
      </div>
    </div>
  );
};

export default Slide;

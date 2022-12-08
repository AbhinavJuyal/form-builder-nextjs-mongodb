import useStore from "app-client/store";
import dynamic from "next/dynamic";
import cls from "classnames";

const FormItemContainer = dynamic(
  () => import("containers/FormItemContainer"),
  {
    ssr: false,
  }
);

// max-w-6xl max-h-[600px] max-h-sm
const Slide = () => {
  const componentData = useStore.use.componentData();
  const activeIdx = useStore.use.activeIdx();
  const edit = useStore.use.edit();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className={cls(
          "w-full h-full bg-white flex justify-center items-center",
          edit && "max-w-6xl max-h-[600px] max-h-sm"
        )}
      >
        <div className={cls("w-full max-w-md", edit && "scale-75")}>
          <FormItemContainer />
        </div>
      </div>
    </div>
  );
};

export default Slide;

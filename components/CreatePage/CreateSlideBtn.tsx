import { FormComponentTypes } from "@types";
import useStore from "app-client/store";
import { Plus } from "phosphor-react";
import { formComponentTypes } from "utils/constants";
import { createDefFormItem } from "utils/fns";

const CreateSlideBtn = () => {
  const { addFormItem } = useStore();
  const createNewSlide = (type: FormComponentTypes) =>
    addFormItem(createDefFormItem(type));
  return (
    <div className="dui-dropdown dui-dropdown-right">
      <button
        type="button"
        tabIndex={0}
        className="bg-white p-2 rounded-sm flex justify-center items-center"
      >
        <Plus size={16} weight="bold" className="text-black" />
      </button>
      <ul
        tabIndex={0}
        className="dui-dropdown-content dui-menu p-2 ml-2 shadow bg-base-100 rounded-lg w-min"
      >
        {Object.values(formComponentTypes).map((type, idx) => (
          <button
            key={idx}
            onClick={() => createNewSlide(type)}
            className="text-black whitespace-nowrap text-left px-4 py-2 hover:bg-slate-200"
          >
            {type}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default CreateSlideBtn;

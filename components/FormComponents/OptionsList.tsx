import Option from "./Option";
import useStore from "app-client/store";

import { RADIO, validAddOptionTypes } from "utils/constants";
import { optionTempFn } from "utils/fns";

import { IFormItem, IOption, OptionsType } from "types";

interface IOptionsList {
  edit: boolean;
  inputType: "checkbox" | "radio";
}

const OptionsList = ({ edit, inputType }: IOptionsList) => {
  const componentData = useStore.use.componentData();
  const activeIdx = useStore.use.activeIdx();
  const editFormItem = useStore.use.editFormItem();

  const formItem: IFormItem = componentData[activeIdx];
  const { options, type: formItemType } = formItem;

  const addOption = () => {
    const changes = (activeFormItem: IFormItem): IFormItem => {
      if (
        !("options" in activeFormItem) ||
        !validAddOptionTypes.includes(formItemType)
      ) {
        console.error(
          "OptionsList - Either Wrong Form Type Or Options not found"
        );
        return activeFormItem;
      }
      const newFormItem = { ...activeFormItem };
      const { options, type } = activeFormItem;
      const newOptions = [...(options as OptionsType)];
      if (type === RADIO)
        newOptions.push(optionTempFn(newOptions[0].name, "", true) as IOption);
      else newOptions.push(optionTempFn("", "", true) as IOption);
      newFormItem.options = newOptions;
      return newFormItem;
    };
    editFormItem(changes);
  };

  return (
    <>
      {options &&
        options.map(({ id: inputId, name, label }) => {
          return (
            <Option
              key={inputId}
              total={options.length}
              {...{ optionId: inputId, inputType, name, edit, label }}
            />
          );
        })}
      {edit && (
        <button
          type="button"
          className="dui-btn dui-btn-primary capitalize mt-6 py-2"
          onClick={addOption}
        >
          Create Option
        </button>
      )}
    </>
  );
};

export default OptionsList;

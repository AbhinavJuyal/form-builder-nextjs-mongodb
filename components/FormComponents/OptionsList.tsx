import Option from "./Option";
import useStore from "app-client/store";

import { RADIO, validAddOptionTypes } from "utils/constants";
import { optionTempFn } from "utils/fns";

import { IFormItem, IOption, OptionsType } from "types";

interface IOptionsList {
  edit: boolean;
  inputType: "checkbox" | "radio";
  formItem: IFormItem;
}

const OptionsList = ({ edit, inputType, formItem }: IOptionsList) => {
  const editFormItem = useStore.use.editFormItem();
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
        options.map((option) => {
          return (
            <Option
              key={option.id}
              total={options.length}
              optionAttr={option}
              inputType={inputType}
              edit={edit}
            />
          );
        })}
      {edit && (
        <button
          type="button"
          className="dui-btn dui-btn-primary capitalize mt-6 py-2"
          onClick={addOption}
        >
          s Create Option
        </button>
      )}
    </>
  );
};

export default OptionsList;

import { nanoid } from "nanoid";
import useStore from "app-client/store";

import { RADIO, validAddOptionTypes } from "utils/constants";
import { optionsTemp } from "utils/fns";
import { IFormItem, OptionsType } from "types";
import Option from "./Option";

interface IOptionsList {
  edit: boolean;
  inputType: "checkbox" | "radio";
}

/**
 * deletions
 * edited + create options
 * edited + delete option
 *
 */

const OptionsList = ({ edit, inputType }: IOptionsList) => {
  const { componentData, activeIdx, editFormItem } = useStore();
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
      if (type === RADIO) newOptions.push(optionsTemp(newOptions[0].name, ""));
      else newOptions.push(optionsTemp());
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
              {...{ inputId, inputType, name, edit, label }}
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

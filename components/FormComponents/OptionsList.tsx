import { nanoid } from "nanoid";
import cls from "classnames";
import useStore from "app-client/store";

import { RADIO, validAddOptionTypes } from "utils/constants";
import { optionsTemp } from "utils/fns";
import { IFormItem, OptionsType } from "types";

interface IOptionsList {
  edit: boolean;
  inputType: "checkbox" | "radio";
}

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
      if (type === RADIO) newOptions.push(optionsTemp(newOptions[0].name));
      else newOptions.push(optionsTemp());
      newFormItem.options = newOptions;
      return newFormItem;
    };
    editFormItem(changes);
  };

  return (
    <>
      {options &&
        options.map(({ name, value }) => {
          const inputId = nanoid();
          return (
            <div
              className="flex items-center w-full border p-2 my-2 rounded-lg"
              key={inputId}
            >
              <input
                className={cls(
                  "m-1",
                  inputType === "radio" ? "dui-radio" : "dui-checkbox"
                )}
                type={inputType}
                id={inputId}
                name={name}
              />
              {edit ? (
                <input
                  className="input-base text-black text-xl"
                  type="text"
                  placeholder="Anything that is relevant to the question"
                  defaultValue={value}
                />
              ) : (
                <label
                  className="input-base text-black text-xl ml-3"
                  htmlFor={inputId}
                >
                  {value}
                </label>
              )}
            </div>
          );
        })}
      {edit && (
        <button
          type="button"
          className="dui-btn capitalize mt-6 py-2"
          onClick={addOption}
        >
          Create Option
        </button>
      )}
    </>
  );
};

export default OptionsList;

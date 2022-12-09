import { ChangeEventHandler, useRef, useState } from "react";
import cls from "classnames";
import { MinusCircle } from "phosphor-react";

import useStore from "app-client/store";
import { debounce, optionTempFn } from "utils/fns";

import { IFormItem, IOption, OptionsType } from "@types";

/**
 * inputId is only required when edit is false.
 * if the only one option left in the options array
 * then deletion should not be available (total === 1)
 */
interface IOptionComp {
  inputType: "checkbox" | "radio";
  edit: boolean;
  total: number;
  optionAttr: IOption;
}

const Option = ({ inputType, edit, total, optionAttr }: IOptionComp) => {
  const { id: optionId, name, value, checked } = optionAttr;
  const editFormItem = useStore.use.editFormItem();

  const onLabelTxtChange: ChangeEventHandler<HTMLInputElement> = debounce(
    (e) => {
      const change = (activeFormItem: IFormItem): IFormItem => {
        const newFormItem = { ...activeFormItem };
        const newOptions = [...(activeFormItem.options as OptionsType)];
        const optionIdx = newOptions.findIndex(
          (option) => option.id === optionId
        );
        const { name: prevName } = newOptions[optionIdx];
        newOptions[optionIdx] = {
          id: optionId,
          ...optionTempFn(prevName, e.target.value),
        };
        newFormItem.options = newOptions;
        return newFormItem;
      };
      editFormItem(change);
    },
    500
  );

  const removeOption = (inputId: string) => {
    const change = (activeFormItem: IFormItem): IFormItem => {
      const newFormItem = { ...activeFormItem };
      const newOptions = [...(activeFormItem.options as OptionsType)];
      const optionIdx = newOptions.findIndex((option) => option.id === inputId);
      newOptions.splice(optionIdx, 1);
      newFormItem.options = newOptions;
      return newFormItem;
    };
    editFormItem(change);
  };

  return (
    <div className="group relative flex items-center w-full border my-2 rounded-lg hover:border-neutral-focus transition-colors">
      <input
        className={cls(
          "m-2",
          inputType === "radio"
            ? "dui-radio dui-radio-primary"
            : "dui-checkbox dui-checkbox-primary"
        )}
        type={inputType}
        id={optionId}
        name={name}
        value={value}
        defaultChecked={checked}
      />
      {edit && total !== 1 && (
        <MinusCircle
          className="hidden group-hover:block absolute -right-4 text-base-100 cursor-pointer"
          onClick={() => removeOption(optionId)}
          size={28}
          weight="fill"
        />
      )}
      {edit ? (
        <input
          className="input-base text-black text-xl py-2"
          type="text"
          placeholder="Anything that is relevant to the question"
          onChange={onLabelTxtChange}
          defaultValue={value}
        />
      ) : (
        <label
          className="input-base text-black text-xl ml-3 py-2"
          htmlFor={optionId}
        >
          {value}
        </label>
      )}
    </div>
  );
};

export default Option;

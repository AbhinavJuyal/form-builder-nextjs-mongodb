import { IFormItem, OptionsType } from "@types";
import { createSelector } from "app-client/selectors";
import useStore from "app-client/store";
import cls from "classnames";
import { MinusCircle } from "phosphor-react";
import { ChangeEventHandler, MouseEventHandler } from "react";
import { debounce, optionsTemp } from "utils/fns";

// inputId is only required when edit is false.
interface IOption {
  inputId: string;
  inputType: "checkbox" | "radio";
  name: string;
  edit: boolean;
  label: string;
  total: number;
}

const Option = ({ inputId, inputType, name, edit, label, total }: IOption) => {
  const editFormItem = useStore.use.editFormItem();

  const onLabelTxtChange: ChangeEventHandler<HTMLInputElement> = debounce(
    (e) => {
      const change = (activeFormItem: IFormItem): IFormItem => {
        const newFormItem = { ...activeFormItem };
        const newOptions = [...(activeFormItem.options as OptionsType)];
        const optionIdx = newOptions.findIndex(
          (option) => option.id === inputId
        );
        const { name: prevName } = newOptions[optionIdx];
        newOptions[optionIdx] = optionsTemp(prevName, e.target.value);
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
    <div className="group relative flex items-center w-full border p-2 my-2 rounded-lg">
      <input
        className={cls(
          "m-1",
          inputType === "radio"
            ? "dui-radio dui-radio-primary"
            : "dui-checkbox dui-checkbox-primary"
        )}
        type={inputType}
        id={inputId}
        name={name}
      />
      {edit && total !== 1 && (
        <MinusCircle
          className="hidden group-hover:block absolute -right-4 text-base-100 cursor-pointer"
          onClick={() => removeOption(inputId)}
          size={28}
          weight="fill"
        />
      )}
      {edit ? (
        <input
          className="input-base text-black text-xl"
          type="text"
          placeholder="Anything that is relevant to the question"
          onChange={onLabelTxtChange}
          defaultValue={label}
        />
      ) : (
        <label className="input-base text-black text-xl ml-3" htmlFor={inputId}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Option;

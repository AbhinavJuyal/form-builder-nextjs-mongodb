import {
  FormComponentTypes,
  IFormItem,
  IOption,
  ISubmitFormItem,
} from "@types";
import { nanoid } from "nanoid";
import { CHECKBOX, RADIO, TEXT, validMultiplesTypes } from "utils/constants";
import { formItemTemp, validAddOptionTypes } from "./constants";

interface IDebounceRT {
  (...args: any): void;
  cancel?: () => void;
}

export const debounce = <T extends Function>(cb: T, wait = 500) => {
  let h: any = 0;

  let callable: IDebounceRT = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };

  const cancel = () => clearTimeout(h);

  callable.cancel = cancel;

  return <T>(<any>callable);
};

export const optionTempFn = (
  name: string = "",
  label: string = "",
  create: boolean = false
): IOption | Omit<IOption, "id"> => {
  const returnObj = {
    label: label || "",
    name: name || nanoid(),
  };
  return create ? { id: nanoid(), ...returnObj } : returnObj;
};

export const hasOptionKey = (type: string) =>
  validAddOptionTypes.includes(type);

export const hasMultipleAnswers = (type: string) =>
  validMultiplesTypes.includes(type);

export const createDefFormItem = (type: FormComponentTypes) => {
  const newFormItem = { ...formItemTemp };
  newFormItem.id = nanoid();
  newFormItem.type = type;
  const ifOption = validAddOptionTypes.includes(type);
  newFormItem.options = ifOption ? [<IOption>optionTempFn("", "", true)] : [];
  if (!ifOption) delete newFormItem["options"];
  return newFormItem;
};

export const containsKey = (obj: any, key: string) => obj.hasOwnProperty(key);

export const parseFormData = (componentData: IFormItem[]): ISubmitFormItem[] =>
  componentData.map(({ id: itemId, question, type, options }) => ({
    itemId,
    type,
    question,
    value: hasOptionKey(type) && options && hasMultipleAnswers(type) ? [] : "",
  }));

export const changeFormState = (
  prev: ISubmitFormItem[],
  e: EventTarget & HTMLFormElement,
  activeIdx: number
): ISubmitFormItem[] => {
  const { value } = e;
  const { type } = prev[activeIdx];
  const temp = [...prev];

  if (type === CHECKBOX) {
    const { checked } = e;
    const prevVal = [...prev[activeIdx].value];
    const newVal = checked
      ? [...prevVal, value]
      : [...prevVal.filter((val) => val !== value)];
    temp[activeIdx].value = newVal;
  }
  if (type === RADIO) {
    temp[activeIdx].value = value;
  }
  if (type === TEXT) {
    temp[activeIdx].value = value;
  }
  return temp;
};

import { FormComponentTypes } from "@types";
import { nanoid } from "nanoid";
import { formItemTemp, optionTemp, validAddOptionTypes } from "./constants";

export const optionsTemp = (name: string = "") => ({
  ...optionTemp,
  name: name || nanoid(),
});

export const createDefFormItem = (type: FormComponentTypes) => {
  const newFormItem = { ...formItemTemp };
  newFormItem.id = nanoid();
  newFormItem.type = type;
  const ifOption = validAddOptionTypes.includes(type);
  newFormItem.options = ifOption ? [optionsTemp()] : [];
  if (!ifOption) delete newFormItem["options"];
  return newFormItem;
};

export const containsKey = (obj: any, key: string) => obj.hasOwnProperty(key);

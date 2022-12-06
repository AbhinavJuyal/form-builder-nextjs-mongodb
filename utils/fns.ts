import { FormComponentTypes } from "@types";
import { nanoid } from "nanoid";
import { formItemTemp, optionTemp, validAddOptionTypes } from "./constants";

export const debounce = <T extends Function>(cb: T, wait = 20) => {
  let h: any = 0;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
};

// export const promisify =
//   <T extends Function>(cb: T, wait = 20) =>
//   (...args: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(())
//       cb(...args, (err: any, data: any) => {
//         if (err) reject(err);
//         resolve(data);
//       });
//     });
//   };

export const optionsTemp = (name: string = "", label: string = "") => ({
  id: nanoid(),
  label: label || "",
  name: name || nanoid(),
  ...optionsTemp,
});

export const createDefFormItem = (type: FormComponentTypes) => {
  const newFormItem = { ...formItemTemp };
  newFormItem.id = nanoid();
  newFormItem.type = type;
  const ifOption = validAddOptionTypes.includes(type);
  newFormItem.options = ifOption ? [optionsTemp("", "")] : [];
  if (!ifOption) delete newFormItem["options"];
  return newFormItem;
};

export const containsKey = (obj: any, key: string) => obj.hasOwnProperty(key);

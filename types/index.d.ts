import { fromComponentTypes } from "../utils/constants";

export type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export interface IOption {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
}

export type OptionsType = IOption[];

export type FormComponentTypes =
  typeof formComponentTypes[keyof typeof formComponentTypes];

export interface IFormItem {
  id: string;
  type: FormComponentTypes;
  question: string;
  options?: OptionsType;
  value?: string;
}

export interface IFormComponent {
  formItem: IFormItem;
  edit: boolean;
}

export interface IFormData {
  title: string;
  desc: string;
  componentData: IFormItem[];
}

export interface ISubmitFormItem {
  itemId: string;
  type: string;
  question: string;
  value: string | string[];
}

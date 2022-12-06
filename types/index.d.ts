import { fromComponentTypes } from "../utils/constants";

export interface IOption {
  id: string;
  name: string;
  label: string;
}

export type OptionsType = IOption[];

export type FormComponentTypes =
  typeof formComponentTypes[keyof typeof formComponentTypes];

export interface IFormItem {
  id: string;
  type: FormComponentTypes;
  question: string;
  options?: OptionsType;
}

export interface IFormComponent extends IFormItem {
  edit: boolean;
}

export interface IFormData {
  title: string;
  desc: string;
  componentData: IFormItem[];
}

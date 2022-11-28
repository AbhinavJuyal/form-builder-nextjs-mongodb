import { fromComponentTypes } from "../utils/constants";

export interface IOption {
  name: string;
  value: string;
}

export type OptionsType = IOption[];

export interface IFormItem {
  id: string;
  type: string;
  question: string;
  options: OptionsType;
}

export interface IFormComponent extends IFormItem {
  edit: boolean;
}

export interface IFormData {
  title: string;
  desc: string;
  componentData: IFormItem[];
}

export type FormComponentTypes =
  typeof formComponentTypes[keyof typeof formComponentTypes];

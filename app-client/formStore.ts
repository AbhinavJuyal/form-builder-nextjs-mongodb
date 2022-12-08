import { IFormData, IFormItem, ISubmitFormItem } from "types";

export interface IFormStore {
  response: ISubmitFormItem[];
}

type FormStoreFn = (set: any, get: any) => IFormStore;

const defState = {
  response: [
    {
      itemId: "4laZ_PeJHfgk_HA-D9QAj",
      type: "Single Select Radio",
      question: "question1",
      value: "",
    },
    {
      itemId: "gHKebDOroUEkyH_XttCGA",
      type: "Multichoice Checkbox",
      question: "question2",
      value: [],
    },
    {
      itemId: "4WJMNNymCG-7GJXjWg5Jb",
      type: "Text",
      question: "question3",
      value: "",
    },
  ],
};

export const formStore: FormStoreFn = (set: any, get: any) => ({
  ...defState,
});

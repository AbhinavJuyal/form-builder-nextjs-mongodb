import { IFormData } from "types";

export interface INewFormStore extends IFormData {
  activeComponent: number;
}

type NewFormStoreFn = (set: any, get: any) => INewFormStore;

const defState: INewFormStore = {
  title: "Sample Title",
  desc: "",
  componentData: [
    {
      id: "URWQhFTJhqVy7l-Nx7lkv",
      type: "Single Select Radio",
      question: "question1",
      options: [
        {
          name: "2DtclqxdgFnaeD9OS5Rnh",
          value: "q3",
        },
        {
          name: "2DtclqxdgFnaeD9OS5Rnh",
          value: "q4",
        },
        {
          name: "2DtclqxdgFnaeD9OS5Rnh",
          value: "q5",
        },
      ],
    },
  ],
  activeComponent: 0,
};

export const newFormStore: NewFormStoreFn = (set: any, get: any) => ({
  // activeComponent: 1,
  // title: "",
  // desc: "",
  // componentData: [],
  ...defState,
});

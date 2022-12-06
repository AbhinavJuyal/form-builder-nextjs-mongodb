import { IFormData, IFormItem } from "types";
import { devtools } from "zustand/middleware";

export interface INewFormStore extends IFormData {
  activeIdx: number;
  addFormItem: (newFormItem: IFormItem) => void;
  changeActiveIdx: (index: number) => void;
  editFormItem: (changes: (activeFormItem: IFormItem) => IFormItem) => void;
  editFormTitle: (title: string) => void;
}

type NewFormStoreFn = (set: any, get: any) => INewFormStore;

const defState = {
  title: "Sample Title",
  desc: "",
  componentData: [
    {
      id: "URWQhFTJhqVy7l-Nx7lkv",
      type: "Single Select Radio",
      question: "question1",
      options: [
        {
          id: "LDVRULNJfoPa_KJknxMuw",
          name: "2DtclqxdgFnaeD9OS5Rnh",
          label: "q3",
        },
        {
          id: "FLPMsmsBrQLlU4ycCq59z",
          name: "2DtclqxdgFnaeD9OS5Rnh",
          label: "q4",
        },
        {
          id: "M5BSikER4uOzeQIJEFLOX",
          name: "2DtclqxdgFnaeD9OS5Rnh",
          label: "q5",
        },
      ],
    },
  ],
  activeIdx: 0,
};

// export const logger: typeof devtools = (config) => (set, get, api) =>
//   config(
//     (args) => {
//       console.log("  applying", args);
//       set(args);
//       console.log("  new state", get());
//     },
//     get,
//     api
//   );

export const newFormStore: NewFormStoreFn = (set: any, get: any) => ({
  ...defState,
  addFormItem: (newFormItem: IFormItem) =>
    set((state: INewFormStore) => ({
      ...state,
      componentData: [...state.componentData, newFormItem],
    })),
  changeActiveIdx: (index: number) =>
    set((state: INewFormStore) => ({ ...state, activeIdx: index })),
  editFormItem: (changes: (activeFormItem: IFormItem) => IFormItem) =>
    set((state: INewFormStore) => {
      const { activeIdx, componentData } = state;
      const activeFormItem = componentData[activeIdx];
      const newComponentData = [...componentData];
      newComponentData[activeIdx] = changes(activeFormItem);
      return { ...state, componentData: newComponentData };
    }),
  editFormTitle: (title: string) =>
    set((state: INewFormStore) => ({ ...state, title })),
});

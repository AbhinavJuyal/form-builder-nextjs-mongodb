import { IFormData, IFormItem } from "types";

export interface INewFormStore extends IFormData {
  activeIdx: number;
  addFormItem: (newFormItem: IFormItem) => void;
  changeActiveIdx: (index: number) => void;
  editFormItem: (changes: (activeFormItem: IFormItem) => IFormItem) => void;
}

type NewFormStoreFn = (set: any, get: any) => INewFormStore;

const defState = {
  title: "Sample Title",
  desc: "",
  componentData: [
    {
      id: "URWQhFTJhqVy7l-Nx7lkv",
      type: "Text",
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
  activeIdx: 0,
};

export const newFormStore: NewFormStoreFn = (set: any, get: any) => ({
  ...defState,
  addFormItem: (newFormItem: IFormItem) =>
    set((state: INewFormStore) => ({
      ...state,
      componentData: [...state.componentData, newFormItem],
    })),
  changeActiveIdx: (index: number) =>
    set((state: INewFormStore) => ({ ...state, activeIdx: index })),
  // editFormItem: (formItem: IFormItem) =>
  //   set((state: INewFormStore) => {
  //     const { activeIdx } = state;
  //     const activeFormItem = state.componentData[activeIdx];
  //     if (formItem.id === activeFormItem.id) {
  //       const newComponentData = [...state.componentData];
  //       newComponentData[activeIdx] = formItem;
  //       return { ...state, componentData: newComponentData };
  //     }
  //   }),
  editFormItem: (changes: (activeFormItem: IFormItem) => IFormItem) =>
    set((state: INewFormStore) => {
      const { activeIdx, componentData } = state;
      const activeFormItem = componentData[activeIdx];
      const newComponentData = [...componentData];
      newComponentData[activeIdx] = changes(activeFormItem);
      return { ...state, componentData: newComponentData };
    }),
});

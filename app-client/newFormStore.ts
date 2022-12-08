import { IFormData, IFormItem } from "types";

export interface INewFormStore extends IFormData {
  activeIdx: number;
  edit: boolean;
  addFormItem: (newFormItem: IFormItem) => void;
  changeActiveIdx: (index: number) => void;
  editFormItem: (changes: (activeFormItem: IFormItem) => IFormItem) => void;
  editFormTitle: (title: string) => void;
}

type NewFormStoreFn = (set: any, get: any) => INewFormStore;

// const defState = {
//   title: "Sample Title",
//   desc: "",
//   componentData: [
//     {
//       id: "URWQhFTJhqVy7l-Nx7lkv",
//       type: "Single Select Radio",
//       question: "question1",
//       options: [
//         {
//           id: "LDVRULNJfoPa_KJknxMuw",
//           name: "2DtclqxdgFnaeD9OS5Rnh",
//           label: "q3",
//         },
//         {
//           id: "FLPMsmsBrQLlU4ycCq59z",
//           name: "2DtclqxdgFnaeD9OS5Rnh",
//           label: "q4",
//         },
//         {
//           id: "M5BSikER4uOzeQIJEFLOX",
//           name: "2DtclqxdgFnaeD9OS5Rnh",
//           label: "q5",
//         },
//       ],
//     },
//   ],
//   activeIdx: 0,
//   edit: false,
// };

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

const defState = {
  title: "Sample Title",
  desc: "",
  componentData: [
    {
      id: "4laZ_PeJHfgk_HA-D9QAj",
      type: "Single Select Radio",
      question: "question1",
      options: [
        {
          id: "RfUDU6tP8INHldtplB4FZ",
          label: "op1",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
        {
          id: "DFyO9sp-24tfRjUNsMKMo",
          label: "op2",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
        {
          id: "CK2tIFpoaf9W5HudANtB8",
          label: "op3",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
      ],
    },
    {
      id: "gHKebDOroUEkyH_XttCGA",
      type: "Multichoice Checkbox",
      question: "question2",
      options: [
        {
          id: "Kqe86HS8DLqd3m2pi2LQO",
          label: "op1",
          name: "5c2Er97XuzTjlpfSazR46",
        },
        {
          id: "LQkEpYF_qwoKm1h6m3MEE",
          label: "op2`",
          name: "zFJ-0m6vVFdY4zILLIRPj",
        },
        {
          id: "w7iB0_guI3X7Jyn22ar0l",
          label: "op3",
          name: "MugZRBnxKNtw2I7oLuIgO",
        },
      ],
    },
    {
      id: "4WJMNNymCG-7GJXjWg5Jb",
      type: "Text",
      question: "question3",
    },
  ],
  activeIdx: 0,
  edit: false,
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

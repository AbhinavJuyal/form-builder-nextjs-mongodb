import create from "zustand";
import { devtools } from "zustand/middleware";
import { createSelectors } from "./createSelectors";
import { newFormStore, INewFormStore } from "./newFormStore";

// const setMiddlewares = (f) => dev;

const storeCombiner = (set: any, get: any) => ({
  ...newFormStore(set, get),
});

export interface IStore extends INewFormStore {}

const useStoreBase = create<IStore, [["zustand/devtools", IStore]]>(
  devtools(storeCombiner)
);

const useStore = createSelectors(useStoreBase);

export default useStore;

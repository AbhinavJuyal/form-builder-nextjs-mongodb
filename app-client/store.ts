import create from "zustand";
import { devtools } from "zustand/middleware";
import { newFormStore, INewFormStore } from "./newFormStore";

const storeCombiner = (set: any, get: any) => ({
  ...newFormStore(set, get),
});

interface IStore extends INewFormStore {}

const useStore = create<IStore, [["zustand/devtools", IStore]]>(
  devtools(storeCombiner)
);

export default useStore;

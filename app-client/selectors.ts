import { IStore } from "./store";

export const createSelector = (state: IStore) => state.create;

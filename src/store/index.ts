import { createStore, Store,useStore as useVuexStore } from "vuex";

import { IRootState, IStoreType } from "./types";

import login from "./login/index";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "",
      age: 0
    };
  },
  mutations: {
    changeName(state) {
      console.log(state);
    }
  },
  actions: {},
  modules: {
    login
  }
});


export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}


export default store;

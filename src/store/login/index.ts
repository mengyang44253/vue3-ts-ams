import { Module } from "vuex";

import { ILoginState } from "./types";
import { IRootState } from "../types";
import { IAccount } from "@/service/login/types";

import localCache from '@/utils/cache'
import router from '@/router'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId,
} from "@/service/login/index";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus:[]
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state,userInfo:any){
      state.userInfo = userInfo;
    },
    changeUserMenu(state,userMenu:any){
      state.userMenus = userMenu;
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const res = await accountLoginRequest(payload);
      const { id, token } = res.data;
      commit("changeToken", token);
      localCache.setCache('token',token)
      console.log(res);
      // return res.data;
      //请求用户信息
      const userRes = await requestUserInfoById(id);
      const userInfo=userRes.data;
      commit('changeUserInfo',userInfo)
      localCache.setCache('userInfo',userInfo)

      //请求用户菜单
      const userMenu=await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus=userMenu.data
      commit("changeUserMenu",userMenus)
      localCache.setCache('userMenus',userMenus)

      //跳转首页
      router.push('/home')

    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(commit);
      console.log(payload);
    },

    loadLocalLogin({commit}){
      const token=localCache.getCache('token');
      if(token){
        commit('changeToken',token)
      }
      const userInfo=localCache.getCache('userInfo')
      if(userInfo){
        commit('changeUserInfo',userInfo)
      }
      const userMenus=localCache.getCache('userMenus')
      if(userMenus){
        commit('changeUserMenu',userMenus)
      }
    }
  },
};




export default loginModule;

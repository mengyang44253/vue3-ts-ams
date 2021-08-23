import hyRequest from "../index";
import { IAccount, IDataType, ILoginRes } from "./types";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus='/role/',
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginRes>>({
    url: LoginAPI.AccountLogin,
  });
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false,
  });
}

export function requestUserMenuByRoleId(id:number){
  return hyRequest.get<IDataType>({
    url:LoginAPI.UserMenus+id+'/menu',
    showLoading: false,
  })
}

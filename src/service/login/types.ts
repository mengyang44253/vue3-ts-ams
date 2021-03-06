export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginRes {
  id: number;
  name: string;
  token: string;
}

export interface IUserInfo {}

export interface IDataType<T = any> {
  code: number;
  data: T;
}

export interface UserBasic {
  username: string;
  password_hash: string;
}

export interface UserStandard {
  username: string;
  password: string;
}

export type UserCreate = UserBasic;

export interface User extends UserBasic {
  id: number;
}

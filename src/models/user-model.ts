export interface UserBasic {
  username: string;
  password_hash: string;
}

export type UserCreate = UserBasic;

export interface User extends UserBasic {
  id: number;
}

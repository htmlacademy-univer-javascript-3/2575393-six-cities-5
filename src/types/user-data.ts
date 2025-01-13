export type BaseUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type UserData = BaseUser & {
  email: string;
  token: string;
}

export type AuthData = {
  login: string;
  password: string;
}

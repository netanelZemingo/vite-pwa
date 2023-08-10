export interface User {
  _id: string;
  username: string;
  password: string;
  subsription?: PushSubscription;
  icon: string;
}
export type UserDto = Omit<User, "password" | "subsription">;

export interface MessageDto {
  _id: string;
  message: string;
  sender: OneToOneDTO<UserDto>;
}
export interface OneToOneDTO<T> {
  _id: string;
  data?: T;
}

export interface MessageNetwork {
  message: string;
  sender: string;
}

export interface UserSubsriptionReq {
  _id: string;
  user: Omit<Partial<User>, "_id">;
}

export type Messages = Record<string, MessageDto>;

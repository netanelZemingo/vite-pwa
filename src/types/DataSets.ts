export interface User {
  _id: string;
  username: string;
  password: string;
  subsription?: PushSubscription;
  icon: string;
}

export interface MessageDto {
  _id: string;
  message: string;
  sender: OneToOneDTO<User>;
}
export interface OneToOneDTO<T> {
  _id: string;
  data?: T;
}

export interface MessageNetwork {
  message: string;
  sender: string;
}

export type Messages = Record<string, MessageDto>;

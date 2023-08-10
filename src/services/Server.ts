import axios, { AxiosHeaders } from "axios";
import { MessageDto, MessageNetwork, Messages, User, UserSubsriptionReq } from "../types/DataSets";

export class ServerService {
  static user: User | null = null;
  // private static dbUrl = "http://localhost:3000";
  private static dbUrl = import.meta.env.VITE_SERVER_PROD_URL;

  private static getHeaders() {
    // const headers = new Headers();
    // if (this.user) {
    //   headers.append("Authorization", this.user && `Bearer ${this.user.username}`);
    // }
    // headers.append("Content-Type", "application/json");
    // // return headers;
    return {
      Authorization: this.user && `Bearer ${this.user._id}`,
      "ngrok-skip-browser-warning": "69420",
    };
  }
  static async register(userReq: Omit<User, "_id" | "icon">) {
    console.log(userReq);
    return await axios.post<{ msg: string; user: User }>(this.dbUrl + "/auth/register", userReq, {
      headers: this.getHeaders(),
    });
  }

  static async sendMessage(msg: MessageNetwork) {
    return await axios.post<{ msg: string }>(this.dbUrl + "/chat", msg, {
      headers: this.getHeaders(),
    });
  }

  static async getAllMessages() {
    return await axios.get<{ msg: string; messages: Messages }>(this.dbUrl + "/chat/get-chat", {
      headers: this.getHeaders(),
    });
  }

  static async subscribeUser(subsribeReq: UserSubsriptionReq) {
    return await axios.post<{ msg: string }>(this.dbUrl + "/auth/subscribe", subsribeReq, {
      headers: this.getHeaders(),
    });
  }
  static async validateUser(user: User) {
    return await axios.post<{ msg: string; isUser: boolean }>(
      this.dbUrl + "/auth/validate-user",
      user,
      {
        headers: this.getHeaders(),
      }
    );
  }
  // static async getAllMessages() {
  //   return await fetch(this.dbUrl + "/chat", {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: this.getHeaders(),
  //   });
  // }
}

import axios from "axios";
import { MessageDto, MessageNetwork, Messages, User } from "../types/DataSets";

export class ServerService {
  static user: User | null = null;
  private static dbUrl = "http://localhost";

  private static getHeaders() {
    return {
      Authorization: this.user && `Bearer ${this.user.username}`,
    };
  }
  static async register(userReq: Omit<User, "_id" | "icon">) {
    console.log(userReq);
    return await axios.post<{ msg: string; user: User }>(this.dbUrl + "/auth/register", userReq);
  }

  static async sendMessage(msg: MessageNetwork) {
    return await axios.post<{ msg: string }>(this.dbUrl + "/chat", msg, {
      headers: this.getHeaders(),
    });
  }

  static async getAllMessages() {
    return await axios.get<{ msg: string; messages: Messages }>(this.dbUrl + "/chat", {
      headers: this.getHeaders(),
    });
  }
}

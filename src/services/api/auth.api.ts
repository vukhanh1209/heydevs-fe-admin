import { LoginREQ } from "../auth/auth.request";
import { LoginRES } from "../auth/auth.response";
import axiosClient from "../axiosClient";
import { LOGIN, REFRESH_TOKEN } from "@/const/endpoint.const";

export const signIn = (params: LoginREQ): Promise<LoginRES> =>
  axiosClient.post(LOGIN, params);
export const refreshToken = (params: any) =>
  axiosClient.post(REFRESH_TOKEN, params);

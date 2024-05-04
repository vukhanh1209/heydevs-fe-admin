import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { signIn } from "@/services/api/auth.api";
import { LoginREQ } from "@/services/auth/auth.request";
import { LoginRES } from "@/services/auth/auth.response";
import { setCookie } from "@/utils/cookie.helper";
import { TOKEN } from "@/const/auth.constant";

export const authSignIn = createAsyncThunk(
  "auth/authSignIn",
  async (params: LoginREQ, { dispatch, getState, rejectWithValue }) => {
    try {
      const response: LoginRES = await signIn(params);
      if (response?.accessToken) {
        notifySuccess("Đăng nhập thành công");
        setCookie(TOKEN, response.accessToken);
        return response;
      }
    } catch (err: any) {
      notifyErrors(err?.message || err?.errorCode);
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

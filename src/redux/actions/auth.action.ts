import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { LocalStorage } from "@/utils/localStorage";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { signIn } from "@/services/api/auth.api";
import { LoginREQ } from "@/services/auth/auth.request";
import { LoginRES } from "@/services/auth/auth.response";

export const authSignIn = createAsyncThunk(
  "auth/authSignIn",
  async (params: LoginREQ, { dispatch, getState, rejectWithValue }) => {
    try {
      const response: LoginRES = await signIn(params);
      if (response?.accessToken) {
        notifySuccess("Đăng nhập thành công");
        LocalStorage.setToken(response?.accessToken);
        return response;
      }
    } catch (err: any) {
      notifyErrors(err?.message || err?.errorCode);
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

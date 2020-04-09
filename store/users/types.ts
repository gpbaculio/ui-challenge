import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./constants";

export interface UsersStateType {
  loading: boolean;
  currentUser: UserInfo | null;
  error: string;
}

export interface FetchUserRequestType {
  type: typeof FETCH_USER_REQUEST;
}


export interface UserInfo {
  id: string;
  avatar: string;
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
}

export interface FetchUserSuccessType {
  type: typeof FETCH_USER_SUCCESS;
  payload: {
    currentUser: UserInfo
  };
}

export interface FetchUserFailureType {
  type: typeof FETCH_USER_FAILURE;
  payload: {
    error: string;
  };
}

export type UsersActionTypes =
  | FetchUserRequestType
  | FetchUserSuccessType
  | FetchUserFailureType;

import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./constants";
import { UserInfo } from "./types";

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST })

export const fetchUserSuccess = (currentUser: UserInfo) => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    currentUser
  }
})

export const fetchUserFailure = (error: string) => ({
  type: FETCH_USER_FAILURE,
  payload: {
    error
  }
})
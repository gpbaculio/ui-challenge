import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './constants';
import { UsersActionTypes, UsersStateType } from './types';

const usersInitState: UsersStateType = {
  loading: false,
  currentUser: null,
  error: ''
};

const usersReducer = (state = usersInitState, action: UsersActionTypes) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.currentUser,
        loading: false,
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        currentUser: null,
        error: action.payload.error,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default usersReducer;

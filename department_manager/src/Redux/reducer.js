import {
  ADD_ERROR,
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_ERROR,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  EDIT_ERROR,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  GET_ERROR,
  GET_REQUEST,
  GET_SUCCESS,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  data: []
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: []
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    }
    case ADD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: []

      };
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    }
    case DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: []
      };
    }
    case DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter((ele)=> ele.id !== action.payload) 
      };
    }
    case DELETE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    }
    case EDIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: []
      };
    }
    case EDIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case EDIT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    }
    default: {
      {
        return state;
      }
    }
  }
};

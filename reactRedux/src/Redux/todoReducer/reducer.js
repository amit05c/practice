import { FAILURE, LOADING, SUCCESS } from "./action.type";

const init = {
  isLoading: false,
  todos: [],
  isError: false,
};

export const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case SUCCESS:
      return {
        ...state,
        todos: [...payload],
        isLoading: false,
        isError: false,
      }

    case FAILURE:
      return {
        ...state,
        isError: false,
      }

    default:
      return {
        ...state,
      }
  }
};

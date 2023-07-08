export const initialState = {
  allUsers: [], //dispatched in main
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "GetAllUsers": {
      if (action.payload) {
        return {
          ...state,
          allUsers: action.payload,
        };
      }
      break;
    }

    default:
      return state;
  }
};

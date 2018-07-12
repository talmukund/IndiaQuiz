const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PUSH_ANSWER":
      return {
        ...state,
        answer: action.payload.result
      };

    default:
      return state;
  }
};

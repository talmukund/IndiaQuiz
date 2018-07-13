const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PUSH_ANSWER":
      const answer = state.answer
        ? [...state.answer, action.payload.result]
        : [action.payload.result];
      return {
        answer
      };

    default:
      return state;
  }
};

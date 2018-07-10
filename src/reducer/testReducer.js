const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "type":
      return { ...state };

    default:
      return state;
  }
};

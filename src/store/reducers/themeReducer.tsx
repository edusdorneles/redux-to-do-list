const initialState = true;

const themeReducer = (state = initialState, action: IThemeAction) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return !action.payload;
    default:
      return state;
  }
};

export default themeReducer;

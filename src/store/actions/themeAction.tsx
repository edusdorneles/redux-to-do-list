// Action creator para temas
const initialState = true;

export const switchTheme = (theme = initialState) => {
  return {
    type: "SWITCH_THEME",
    payload: theme
  };
};

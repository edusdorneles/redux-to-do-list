type Theme = boolean;

interface ITheme {
  theme: boolean;
}

type IThemeActionCreator = (theme: Theme) => void;

interface IThemeAction {
  type: "SWITCH_THEME";
  payload: Theme;
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };

    fontSize: {
      title: string;
      medium: string;
      small: string;
    };

    transition: string;
  }
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      action: string;
    };
    fontSize: {
      title: string;
      bigger: string;
      big: string;
      regular: string;
      small: string;
    };
  }
}

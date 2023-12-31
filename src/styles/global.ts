import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
     width: 5px;
    }
    ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary}; 
    border-radius: 10px;
    }
    
}
body{
margin: 0;
padding: 0;
background-color: ${(props) => props.theme.colors.background};
color: ${(props) => props.theme.colors.text};
font-size: ${(props) => props.theme.fontSize.regular};
}

ul, ol {
    margin: 0;
    padding:0;
}

a{
    text-decoration: none;
}

`;

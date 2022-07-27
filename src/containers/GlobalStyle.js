import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.body.color};
    background: ${props => props.theme.body.background};
  }

  a {
    color: ${props => props.theme.a.color};
    text-decoration: none;
  }

  h1, h2 {
    text-shadow: 0 0 1px ${props =>
            props.theme.name === 'lightTheme'
                    ? '#000000'
                    : '#ffffff'
    };
  }
`

export default GlobalStyle;
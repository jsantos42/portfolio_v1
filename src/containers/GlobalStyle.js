import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.body.color};
    background: ${props => props.theme.body.background};
  }
  a {
    color: ${props => props.theme.a.color};
  }
`

export default GlobalStyle;
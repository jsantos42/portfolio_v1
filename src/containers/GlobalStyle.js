import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    /*height: calc(100vh - 6rem);*/
    /*height: 100%;*/
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.body.color};
    background: ${props => props.theme.body.background};
    display: flex;
    flex-direction: column;
    //max-height: 100%;
    //min-height: calc(100vh - 6rem);
    //justify-content: flex-end;
    //align-items: flex-end;
    //align-content: flex-end;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    color: ${props => props.theme.a.color};
    text-decoration: none;
  }

  h1, h2 {
    text-shadow: 0 0 1px ${props =>
            props.theme.name === 'light'
                    ? '#000000'
                    : '#ffffff'
    };
    text-align: center;
  }
`

export default GlobalStyle;
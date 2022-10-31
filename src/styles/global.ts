import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
        line-height: 160%;
    }
    
    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`
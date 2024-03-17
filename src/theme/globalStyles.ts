import { createGlobalStyle } from 'styled-components';
import {breakpoint} from "./breakpoints";
import {reset} from "./reset";



export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    word-break: break-word;
    background-color: ${({ theme }) => theme.colors.gray};

    ${breakpoint.lg} {
      padding-top: 0;
    }
  }

  button:focus-visible, a:focus-visible {
  }

  a[href], button {
    cursor: pointer;
  }

  a[href] {
    transition: all 0.1s linear 0s;
  }
`;

export default GlobalStyle;

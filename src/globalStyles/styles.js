import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFFBEB;
    font-family: 'Karla', sans-serif;
  }
  *::-webkit-scrollbar-track {
    background: #ECF9FF;
    border-radius: 10px;
  }
  *::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background: #F5C7A9;
    border-radius: 10px;
  }

`;

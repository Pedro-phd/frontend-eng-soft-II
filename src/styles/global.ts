import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
      --purple:#34315E;
      --black:#1C1C1C;
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }
  @font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/poppins-v15-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-200.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-200.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v15-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-800 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src: url('../fonts/poppins-v15-latin-800.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/poppins-v15-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v15-latin-800.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v15-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v15-latin-800.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  body {
    overflow-y: hidden;
    background: rgb(52,49,94);
    background: linear-gradient(300deg, rgba(52,49,94,1) 0%, rgba(47,46,65,1) 100%);
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles

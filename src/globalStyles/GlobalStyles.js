import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
:root {
   --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1)
}
*, *::before, *::after {
  box-sizing: border-box;
}

html,
body, #root {
 position: relative;
 font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
html {
  scroll-behavior: smooth;
}
div {
  box-sizing: border-box;
}
`;

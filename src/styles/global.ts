import { createGlobalStyle } from 'styled-components';

import gitHubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background:#F0F0F5 url(${gitHubBackground}) no-repeat 70% top;
  -webkit-font-smothing: antialiased;

}
body, input, button{
  font: 16px Roboto,sans-serif;
}
#root {
  max-width: 960px;
  margin: 0px auto;
  padding: 40px 20px;
}
`;

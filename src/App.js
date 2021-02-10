import React, { useContext, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

import * as Style from './style';

const Main = () => {

  const dados = useContext(ThemeContext);

  return(
    <>
      <h1>{dados.Tema.theme}</h1>
      <Style.Button Tema={dados.Tema.theme} onClick={(e) => {dados.foo()}} >change theme</Style.Button>
    </>
  );

}

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Main /> 
    </ThemeProvider>
  );
}

export default App;

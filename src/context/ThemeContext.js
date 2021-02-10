import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [ Theme, setTheme ] = useState({});

  useEffect(() => {
    if(localStorage.getItem('mode') == null){
      localStorage.setItem('mode', 'off');
    }
    UpdateTheme();
  }, [])

  const showAlert = () => {
    if(localStorage.getItem('mode') !== null && localStorage.getItem('mode') == 'off'){
      localStorage.setItem('mode', 'on');
      UpdateTheme();
    }else if(localStorage.getItem('mode') !== null && localStorage.getItem('mode') == 'on'){
      localStorage.setItem('mode', 'off');
      UpdateTheme();
    }else{
      localStorage.setItem('mode', 'off');
      UpdateTheme();
    }
  }

  const UpdateTheme = () => {
    const localData = localStorage.getItem('mode');
    if(localData !== null){
      setTheme(localData == 'off' ? {
        theme: '#fff'
      } : {
        theme: '#333'
      });
    }else{
      alert('nuull');
    }
  }

  return(
    <ThemeContext.Provider value={{Tema: Theme, foo: showAlert}}>
      { children }
    </ThemeContext.Provider>
  );

}

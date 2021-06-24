import React, { useState, useEffect } from "react"
import TopNav from './top-nav';

export default function Layout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(undefined);

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem('isDarkTheme') === 'true' || false)
    if (localStorage.getItem('isDarkTheme') === 'true') {
      document.body.style = 'background: black;';
    } else {
      document.body.style = 'background: white;';
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('isDarkTheme', !isDarkTheme);
    if (isDarkTheme === true) {
      document.body.style = 'background: white;';
    } else {
      document.body.style = 'background: black;';

    }
  }

  return (
    <div id="layout" className={`${isDarkTheme ? 'dark-theme' : ''}`}>
      <TopNav
        {...{
          toggleTheme,
          isDarkTheme
        }}
      />
      {children}
    </div>
  )
}

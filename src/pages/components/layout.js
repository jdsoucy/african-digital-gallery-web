import React, { useState, useEffect } from "react"
import TopNav from './top-nav';

export default function Layout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(undefined);

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem('isDarkTheme') === 'true' || false)
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('isDarkTheme', !isDarkTheme);
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

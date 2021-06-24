import React from "react"
import moonIcon from '../../../static/moon-solid.svg'
import sunIcon from '../../../static/sun-solid.svg'
import './top-nav.scss'

const TopNav = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="top-nav">
      <div className="left">ADG</div>
      <div className="right">
        <ul>
          <li><a href="https://rarible.com/african-digital-gallery">NFT</a></li>
          <li><button onClick={toggleTheme}>{isDarkTheme ? <img src={sunIcon} /> : <img src={moonIcon} />}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNav;

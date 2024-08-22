import React, { memo, useState, useEffect } from 'react'
import { HeaderRightWrapper } from "./style";
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderRight = memo(({ className }) => {
  // set the state of the panel
  const [showPanel, setShowPanel] = useState(false)

  // close the panel when click outside
  useEffect(() => {
    function windowClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowClick)
    // remove the event listener
    return () => {
      window.removeEventListener("click", windowClick)
    }
  }, [])

  return (
    <HeaderRightWrapper className={className}>
      <div className="text">Rbnb your home</div>
      <LanguageIcon className='languageIcon' />
      <div className="info" onClick={(e) => { setShowPanel(true); e.stopPropagation() }}>
        <MenuIcon className="login"></MenuIcon>
        <AccountCircleIcon className="avatar"></AccountCircleIcon>
        {
          showPanel &&
          (<div className="panel">
            <div className="top">
              <div className="item sign-up">Sign up</div>
              <div className="item log-in">Log in</div>
            </div>
            <div className="bottom">
              <div className="item title">Rbnb your home</div>
              <div className="item help">Help centre</div>
            </div>
          </div>)
        }
      </div>


    </HeaderRightWrapper>
  )
})

export default HeaderRight
import React, { memo } from 'react'
import { HeaderWrapper } from './style.js'
import HeaderLeft from './c-cpns/HeaderLeft/HeaderLeft'
import HeaderCenter from './c-cpns/HeaderCenter/HeaderCenter'
import HeaderRight from './c-cpns/HeaderRight/HeaderRight'


const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft className='left' />
      <HeaderCenter className='center' />
      <HeaderRight className='right' />

    </HeaderWrapper>
  )
})

export default Header
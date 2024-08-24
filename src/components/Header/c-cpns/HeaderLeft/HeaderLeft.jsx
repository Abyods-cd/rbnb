import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import HomeOutlined from '@ant-design/icons/HomeOutlined'
import { useNavigate } from 'react-router'


const HeaderLeft = memo(({ className }) => {
  const navigate = useNavigate()
  // click favico to back to home page
  function favicoClick() {
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper className={className} onClick={() => favicoClick()} >
      <HomeOutlined />
      <div className="title">rbnb</div>

    </HeaderLeftWrapper>
  )
})

export default HeaderLeft
import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import HomeOutlined from '@ant-design/icons/HomeOutlined'


const HeaderLeft = memo(({ className }) => {
  return (
    <HeaderLeftWrapper className={className}>
      <HomeOutlined />
      <div className="title">rbnb</div>

    </HeaderLeftWrapper>
  )
})

export default HeaderLeft
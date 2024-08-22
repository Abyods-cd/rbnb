import React, { memo } from 'react'
import { HeaderCenterWrapper } from './style'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const HeaderCenter = memo(({ className }) => {
  return (
    <HeaderCenterWrapper className={className}>
      <div className="where">Any where</div>
      <div className="week">Any week</div>
      <div className="guest">Add guests</div>
      <SearchTwoToneIcon className="searchIcon" />
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter
import React, { memo } from 'react'
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import DetailImage from './c-cpns/DetailImage/DetailImage'
import DetailContent from './c-cpns/DetailContent/DetailContent'
import IconsFooter from './c-cpns/IconsFooter/IconsFooter'


const Detail = memo(() => {
  const currentItem = useSelector(state => state.detail.displayedItem)

  return (
    <DetailWrapper>
      <DetailImage></DetailImage>
      <DetailContent></DetailContent>
      {
        currentItem.icons === 'true' && <IconsFooter></IconsFooter>
      }
    </DetailWrapper>
  )
})

export default Detail
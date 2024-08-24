import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import HomeOutlined from '@ant-design/icons/HomeOutlined'
import { useNavigate } from 'react-router'
import { setCurrentTab } from '@/store/modules/home.js'
import { useSelector,useDispatch } from 'react-redux'

const HeaderLeft = memo(({ className }) => {
  // get the tabs data from the redux store
  const tabsData = useSelector(state => state.home.tabsData)

  const dispatch = useDispatch()

  const navigate = useNavigate()
  // click favico to back to home page and set the current tab to the first tab
  function favicoClick() {
    dispatch(setCurrentTab(tabsData[0]))
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
import React, { memo } from 'react'
import { useRoutes } from 'react-router'
import routes from './router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = memo(() => {
  return (
    <div className='app'>
      <Header className="header">h</Header>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <Footer className="footer">f</Footer>
    </div>
  )
})

export default App
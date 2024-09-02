import React, { memo } from 'react'
import { useRoutes } from 'react-router'
import routes from './router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Suspense } from 'react'

const App = memo(() => {
  return (
    <div className='app'>
      <Header className="header">h</Header>
      <Suspense fallback="Page is loading">
        <div className="content">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <Footer className="footer">f</Footer>
    </div>
  )
})

export default App
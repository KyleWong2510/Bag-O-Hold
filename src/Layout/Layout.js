import React from 'react'
import './Layout.scss'

import Header from '../Header/Header'

const Layout = ({ content }) => {
  return (
    <section id='layout'>
      <Header />
      <section id='layout-content'>
        { content }
      </section>
    </section>
  )
}

export default Layout
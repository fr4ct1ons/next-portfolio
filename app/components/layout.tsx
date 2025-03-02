import React from 'react'
import Navbar from './navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout
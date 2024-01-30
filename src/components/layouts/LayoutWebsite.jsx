import React from 'react'
import HeaderWebsite from '../HeaderWebsite'
import FooterWebsite from './FooterWebsite'
import { Outlet } from 'react-router-dom'

const LayoutWebsite = () => {
  return (
    <>
      <div className="container py-3">
        <HeaderWebsite />
        <main>
          <Outlet />
        </main>
        <FooterWebsite />
      </div>
    </>
  )
}

export default LayoutWebsite
import React from 'react'
import { Menu } from './index'

export default {
  title: 'Menu',
  component: Menu,
}

export const Default = () => {
  return (
    <Menu name="Jude Ezekiel">
      <div>Profile</div>
      <div>Logout</div>
    </Menu>
  )
}

import React from 'react'
import './SidebarRow.css'

function SideBar({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className='sidebarRow_icon'/>
      <h5 className='sidebarRow_title'>{title}</h5>
    </div>
  )
}

export default SideBar

import React from 'react';
import { FaHeadset } from "react-icons/fa";
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsBuildings ,}
 from 'react-icons/bs'
 import { FaUserPlus } from "react-icons/fa6";
 import { IoMdSettings } from "react-icons/io";
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < BsCart3 className='icon_header'/> pycrey
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
         <h3 className='menu'>main menu</h3>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUserPlus className='icon'/> create portfolio
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsBuildings className='icon'/> property List
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < FaHeadset className='icon'/> support 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdSettings className='icon'/>setting
                </a>
            </li>
           
        </ul>
    </aside>
  )
}

export default Sidebar
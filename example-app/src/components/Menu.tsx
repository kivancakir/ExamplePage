import React from 'react'
import '../css/menu.css'
import { menuItem } from '../data/MenuData'
import Location from '../assets/menu-icons/location.png'
import DownArrow from '../assets/menu-icons/downarrow.png'
import { MenuTypes } from '../types/Types'

function Menu() {
    return (
        <div className='menu-container'>
            <div className='location-part'>
                <img src={Location} />
                <div style={{height:'40px'}}>
                    <p style={{ display: 'inline', fontSize:'14px', fontWeight:'700', color:'#171A1FFF' }}>Location</p>
                    <br />
                    <select name="" id="" style={{ all: 'unset', marginTop:'5px', fontSize:'12px', fontWeight:'400', color:'#565E6CFF' }}>
                        <option>Sky Cafe Bar</option>
                        <option>Cloud Cafe</option>
                        <option>Main Office</option>
                    </select>
                </div>
                <img src={DownArrow} />
            </div>

            <div className='menu-bar'>
                {
                    menuItem &&
                    menuItem.map((item: MenuTypes) => <div className='menu-item' style={{backgroundColor: item.name === 'Schedule' ? '#00BDD6' : 'transparent', borderRadius:item.name === 'Schedule' ? '8px' : 'none', color:item.name === 'Schedule' ? '#FFFFFF' : 'none'}}>
                        <img src={item.icon} style={{ marginRight: '32px', marginLeft:'15px' }} />
                        {item.name}
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu
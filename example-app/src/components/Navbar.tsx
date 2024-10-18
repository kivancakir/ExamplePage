import React from 'react'
import '../css/navbar.css'
import ClicknClock from '../assets/navbar-icons/clicknclock.png'
import Bag from '../assets/navbar-icons/bag.png'
import Clock from '../assets/navbar-icons/clock.png'
import Notification from '../assets/navbar-icons/notification.png'
import Profile from '../assets/navbar-icons/profile.png'


function Navbar() {
    return (
        <div className='navbar-container'>
            <img src={ClicknClock} style={{marginLeft:'33px'}}/>
            <div className='main-part'>
                <img src={Bag} />
                <img src={Notification} />
                <img src={Clock} />
                <img src={Profile} />
            </div>
        </div>
    )
}

export default Navbar
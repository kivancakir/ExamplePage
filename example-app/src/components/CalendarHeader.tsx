import React from 'react'
import '../css/calendar.css'
import CalendarIcon from '../assets/calendar-icons/calendar.png'
import LeftArrowIcon from '../assets/calendar-icons/leftArrow.png'
import RightArrowIcon from '../assets/calendar-icons/rightArrow.png'
import DownArrow from '../assets/calendar-icons/down-arrow.png'
import RightIcon from '../assets/calendar-icons/righticon.png'
import TrashIcon from '../assets/calendar-icons/trash.png'
import FilterIcon from '../assets/calendar-icons/filter.png'
import ExportIcon from '../assets/calendar-icons/export.png'

function CalendarHeader() {
    return (
        <div className='calendar-container'>
            <div className='first-part'>
                <button className='button-style'>Today</button>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '237px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <img src={CalendarIcon} />
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>Mar18, 2024 - Mar 24, 2024</p>
                </div>
                <div style={{ width: '48px', height: '18px', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={LeftArrowIcon} />
                    <img src={RightArrowIcon} />
                </div>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '129px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>Weekly View</p>
                    <img src={DownArrow} />
                </div>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '223px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <img src={RightIcon} />
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>Copy to Another Week</p>
                    <img src={DownArrow} />
                </div>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '107px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <img src={TrashIcon} />
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>Delete</p>
                    <img src={DownArrow} />
                </div>
            </div>
            <div className='second-part'>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '96px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <img src={FilterIcon} />
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>Filter</p>
                    <img src={DownArrow} />
                </div>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '89px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <img src={ExportIcon} />
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>Export</p>
                </div>
                <div style={{ borderRadius: '4px', borderWidth: '1px', borderColor: '#CFD2DAFF', borderStyle: 'solid', height: '36px', textAlign: 'center', width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'#00BDD6FF', color:'#FFFFFF'}}>
                    <p style={{ fontSize: '16px', fontWeight: '700' }}>Publish (11)</p>
                </div>
            </div>
        </div>
    )
}

export default CalendarHeader
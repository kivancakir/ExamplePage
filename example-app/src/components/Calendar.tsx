import React from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import TableBottom from './TableBottom'
import '../css/calendar.css'

function Calendar() {
    return (
        <div className='calendar-wrapper'>
            <CalendarHeader />
            <CalendarBody />
            <TableBottom />
        </div>
    )
}

export default Calendar
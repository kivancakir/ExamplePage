import React from 'react'
import '../css/shiftTemplate.css'
import ShiftTemplateIcon from '../assets/template-icons/shiftTemplate.png'
import WeekTemplateIcon from '../assets/template-icons/weekTemplate.png'
import { shiftTemplateItem } from '../data/ShiftTemplateData'
import { ShiftTemplateTypes, WeekTemplateTypes } from '../types/Types'
import Clock from '../assets/template-icons/template-clock.png'
import Speech from '../assets/template-icons/template-speech.png'
import { weekTemplateItem } from '../data/WeekTemplateData'
import DownArrow from '../assets/calendar-icons/down-arrow.png'



const getColor = (job: string) => {
  switch (job) {
    case 'Receptionist':
      return '#17A948';
    case 'Cashier':
      return '#D29211';
    case 'Bartender':
      return '#197DCA';
  }
}

function Template() {
  return (
    <div className='shiftTemplate-container'>
      <div style={{ display: 'flex', alignItems: 'center', width: '189px', height: '40px', justifyContent: 'space-evenly', marginTop: '10px' }}>
        <img src={ShiftTemplateIcon} />
        <p style={{ fontSize: '14px', color: '#565E6CFF' }}>Shift Templates</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '140px', height: '53px', fontSize: '12px' }}>
        <div>
          {
            shiftTemplateItem &&
            shiftTemplateItem.map((item: ShiftTemplateTypes) => <div style={{ display: 'flex', alignItems: 'center', width: '140px', height: '53px', marginLeft: '50px', justifyContent: 'space-between', marginTop: '18px', borderWidth: '1px', borderStyle: 'solid', borderColor: getColor(item.job), borderRadius: '0px', padding: '4px' }}>
              <div>
                <p>{item.timeInterval}/30</p>
                <p style={{ color: getColor(item.job) }}>{item.job}</p>

              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '50px', justifyContent: 'space-around' }}>
                <img src={Clock} />
                <img src={Speech} />
              </div>
            </div>)
          }
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '189px', height: '40px', justifyContent: 'space-evenly', marginTop: '220px' }}>
        <img src={WeekTemplateIcon} />
        <p style={{ fontSize: '14px', color: '#565E6CFF' }}>Week Templates</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        {
          weekTemplateItem &&
          weekTemplateItem.map((item: WeekTemplateTypes) => <div style={{ display: 'flex', alignItems: 'center', width: '140px', height: '53px', marginLeft: '20px', justifyContent: 'space-between', marginTop: '18px', borderWidth: '1px', borderStyle: 'solid', borderRadius: '0px', padding: '4px', backgroundColor:'#F3F4F6FF', borderColor:'#DEE1E6FF' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '400' }}>{item.time}</p>
              <p style={{ fontSize: '11px', fontWeight: '400', color:'#9095A0FF' }}>{item.byWhom}</p>
            </div>
            <div>
              <img src={DownArrow} />
            </div>
          </div>)
        }

      </div>
    </div>
  )
}

export default Template
import React from 'react'
import CalendarStarIcon from '../assets/calendar-icons/calendar-star.png'
import BlueCircle from '../assets/calendar-icons/blueCircle.png'
import Speech from '../assets/template-icons/template-speech.png'
import SortIcon from '../assets/calendar-icons/sort-icon.png'
import SearchIcon from '../assets/calendar-icons/search-icon.png'
import DownArrow from '../assets/calendar-icons/down-arrow.png'

function CalendarBody() {
    return (
        // <div style={{ position: 'absolute', top: '180px', left: '279px', width: '1246px' }}>
        <div>
            <table>
                <thead>
                    <tr style={{ height: '95px', color: '#565E6CFF' }}>
                        <th style={{ width: '210px' }}>
                            {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '95px', justifyContent: 'space-between' }}>
                                <div>
                                    <select style={{ all: 'unset', width: '153px', height: '35px', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#BCC1CAFF', textAlign: 'center' }}>
                                        <option value="">Employee View</option>
                                    </select >
                                    <img src={DownArrow}/>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '95px' }}>
                                    <img src={SortIcon} />
                                    <img src={SearchIcon} />
                                </div>
                            </div> */}
                            <div style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
                                <div style={{
                                    display: 'flex', flexDirection: 'row', alignItems: 'center', height: '33px', justifyContent: 'space-around', width: '153px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '4px',
                                    borderColor: '#BCC1CAFF',marginTop:'25px'
                                }}>

                                    <div style={{ height: '50px' }}>
                                        {/* <p style={{ display: 'inline', fontSize: '14px', fontWeight: '700', color: '#171A1FFF' }}>Employee View</p> */}
                                        <br />
                                        <select name="" id="" style={{ all: 'unset', fontSize: '16px', fontWeight: '400', color: '#565E6CFF', marginTop:'-15px'}}>
                                            <option>Employee View</option>
                                            <option>Cloud Cafe</option>
                                            <option>Main Office</option>
                                        </select>
                                    </div>
                                    <img src={DownArrow} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '95px' }}>
                                    <img src={SortIcon} />
                                    <img src={SearchIcon} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>MON</p>
                                <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>18</p>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ color: '#00BDD6FF' }}>
                                <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>TODAY</p>
                                <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>19</p>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>WED</p>
                                <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>20</p>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>THU</p>
                                <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>21</p>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>FRI</p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>22</p>
                        </div></th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>SAT</p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>23</p>
                        </div></th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}>SUN</p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}>24</p>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontSize: '14px', fontWeight: '400', color: '#171A1FFF' }}>Events (1)</td>
                        <td></td>
                        <td></td>
                        <td style={{ width: '140px', backgroundColor: '#A6F5FF', }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <img src={CalendarStarIcon} />
                                <span style={{ display: 'inline', fontSize: '15px', fontWeight: '400' }}>Event title lorem..</span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr style={{ height: '120px' }}>
                        <td>
                            <div style={{ marginBottom: '60px' }}>
                                <p style={{ display: 'inline' }}>Open shifts(3)</p>
                                <br />
                                <p style={{ display: 'inline', color: '##9095A0FF', marginTop: '40px' }}>24h00</p>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#1C49D0FF', borderStyle: 'dashed', backgroundColor: '#F1F4FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={BlueCircle} />
                                    <span style={{ marginLeft: '10px' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', borderStyle: 'dashed', backgroundColor: '#EEFDF3FF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={BlueCircle} />
                                    <span style={{ marginLeft: '10px' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#1C49D0FF', borderStyle: 'dashed', backgroundColor: '#F1F4FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={BlueCircle} />
                                    <span style={{ marginLeft: '10px' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default CalendarBody
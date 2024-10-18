import React from 'react'
import JessicaProfile from '../assets/calendar-icons/calendar-bottom-icons/jessica-profile.png'
import MarkBrownProfile from '../assets/calendar-icons/calendar-bottom-icons/markbrown-profile.png'
import RichardDavisProfile from '../assets/calendar-icons/calendar-bottom-icons/richarddavis-profile.png'
import JohnKingProfile from '../assets/calendar-icons/calendar-bottom-icons/johnking-profile.png'
import Speech from '../assets/template-icons/template-speech.png'
import PlusIcon from '../assets/calendar-icons/calendar-bottom-icons/plus-button.png'
import LastPart from './LastPart'


function TableBottom() {
    return (
        // <div style={{ position: 'absolute', top: '540px', left: '279px', width: '1246px' }}>
        <div>
            <p>Team members(4)</p>
            <table>
                <thead>
                    <tr style={{ height: '95px', color: '#565E6CFF' }}>
                        <th style={{ width: '210px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <img src={JessicaProfile} style={{ marginBottom: '25px', color: '#9095A0FF' }} />
                                <div>
                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#171A1FFF' }}>Jessica Black</span>
                                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#9095A0FF' }}>40h00/39h46</p>
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#17A948', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#BCC1CA', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#17A948', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#BCC1CA', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Barista</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#BCC1CA', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Barista</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#EEFDF3FF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#17A948' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#EEFDF3FF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#17A948' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#EEFDF3FF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px', color: '#17A948' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}></p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}></p>
                        </div></th>
                    </tr>
                </thead>
                <thead>
                    <tr style={{ height: '95px', color: '#565E6CFF' }}>
                        <th style={{ width: '210px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <img src={MarkBrownProfile} style={{ marginBottom: '25px', color: '#9095A0FF' }} />
                                <div>
                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#171A1FFF' }}>Mark Brown</span>
                                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#9095A0FF' }}>40h00/41h53</p>
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#FAFAFBFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px', color: '#171A1FFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '12px', fontWeight: '600' }}>Time Off Request</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F8FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#197DCAFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F8FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#197DCAFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}></p>
                                <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}></p>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#197DCA', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F8FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#197DCAFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#197DCA', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#197DCA', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}></p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}></p>
                        </div></th>
                    </tr>
                </thead>
                <thead>
                    <tr style={{ height: '95px', color: '#565E6CFF' }}>
                        <th style={{ width: '210px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <img src={RichardDavisProfile} style={{ marginBottom: '25px', color: '#9095A0FF' }} />
                                <div>
                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#171A1FFF' }}>Richard Davis</span>
                                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#9095A0FF' }}>40h00/40h35</p>
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F4FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: '#171A1F' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600', color: '#D29211' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#DEE1E6', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#171A1F' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>All Day</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Time Off</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#D29211', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            {/* Boşluk */}
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#D29211', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F4FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: '#171A1F' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '600', color: '#D29211' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}></p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}></p>
                        </div></th>
                    </tr>
                </thead>
                <thead>
                    <tr style={{ height: '95px', color: '#565E6CFF' }}>
                        <th style={{ width: '210px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <img src={JohnKingProfile} style={{ marginBottom: '25px', color: '#9095A0FF' }} />
                                <div>
                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#171A1FFF' }}>John King</span>
                                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#9095A0FF' }}>48h00/20h30</p>
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#EEFDF3FF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px', color: '#17A948' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#EEFDF3FF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '30px', color: '#17A948' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400' }}>Receptionist</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F8FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#197DCAFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400' }}>Bartender</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F4FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: '#171A1F' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400', color: '#D29211' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}>
                            <div style={{ width: '140x', height: '53px', borderRadius: '0px', borderWidth: '1px', borderColor: '#17A948FF', backgroundColor: '#F1F4FDFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '10px', color: '#FFFFFF' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <img src={BlueCircle} /> */}
                                    <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: '#171A1F' }}>09:00-17:30/30</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <span style={{ marginRight: '25px', fontSize: '14px', fontWeight: '400', color: '#D29211' }}>Cashier</span>
                                    <img src={Speech} />
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}></p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}></p>
                        </div></th>
                        <th style={{ width: '210px' }}><div>
                            <p style={{ fontSize: '14px', fontWeight: '400', marginBottom: '30px' }}></p>
                            <p style={{ fontSize: '40px', fontWeight: '400', display: 'inline' }}></p>
                        </div></th>
                    </tr>
                </thead>
            </table>

            <button style={{width:'149px', height:'36px', marginTop:'15px', backgroundColor:'#FFFFFF', borderRadius:'4px', borderWidth:'1px', borderColor:'#00BDD6FF', borderStyle:'solid', fontSize:'14px', fontWeight:'400', color:'#00A9C0FF', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}> 
                <img src={PlusIcon} alt="" />Add Employees
            </button>

            <LastPart />
        </div>
    )
}

export default TableBottom
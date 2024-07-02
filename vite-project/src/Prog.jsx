import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { FaAddressCard } from 'react-icons/fa';

const Prog = () => {
  return (
    <div className='container' id='prog'>
        <h2>Our programs</h2>
        <span className="line"></span>
       
        <div className='row'>
        <VerticalTimeline lineColor='brown'>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{ background: 'brown', color: '#fff' }}
            icon={<FaAddressCard />}
            contentArrowStyle={{ borderRight: '7px solid  brown' }}

           >
            <div className='weekly col-lg-6 col-md-3 col-xl-12 col-sm-3'>
                <h3 className="vertical-timeline-element-title no-wrap" >Weekly service</h3>
                
                    <table className='table table-bordered '>
                        <tbody>
                            <tr>
                                <td>Eagles Flight</td>
                                <td>Sundays @ 8am-11am</td>
                            
                            </tr>
                            <tr>
                                <td>Women's Program</td>
                                <td>Wednessdays @ 9am-11am</td>
                            </tr>
                            <tr>
                                <td>Bible study</td>
                                <td>Tuesday @ 5pm-7pm</td>
                            </tr>
                            <tr>
                                <td>Zion hour</td>
                                <td>Thursday @ 5pm-7pm</td>
                            </tr>
                        </tbody>
                    </table>
            
            </div>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: 'black', color: 'white' }}
              contentStyle={{ background: 'orange', color: '#fff' }}
              icon={<FaAddressCard />}
              contentArrowStyle={{ borderRight: '7px solid  brown' }}>
            <div className=' Monthly col-lg-6 col-md-3 col-xl-12 col-sm-3'>
            <h3>Monthly service</h3>
                
                <table className='table table-bordered '>
                    <tbody>
                        <tr>
                            <td>Thanksgiving</td>
                            <td> First Sundays @ 8am-11am</td>
                        
                        </tr>
                        <tr>
                            <td>Prophetic Night</td>
                            <td>Last fridays @ 12am</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: 'black', color: 'white' }}
              contentStyle={{ background: 'brown', color: '#fff' }}
              icon={<FaAddressCard />}
              contentArrowStyle={{ borderRight: '7px solid  brown' }}>
            <div className='yearly col-lg-6 col-md-3 col-xl-12 col-sm-3 no-wrap'>
            <h3>Yearly service</h3>
                
                <table className='table table-bordered '>
                    <tbody>
                        <tr>
                            <td>Sacrifice of Praise</td>
                            <td>Sunday @ 8am-11am</td>
                        
                        </tr>
                        <tr>
                            <td>Feast of eagles</td>
                            <td>Sunday @ 9am-11am</td>
                        </tr>
                        <tr>
                            <td>Crossover Night</td>
                            <td>Last night of the year</td>
                        </tr>
                    </tbody>
                </table>
                </div>

            </VerticalTimelineElement>
           
            
            </VerticalTimeline>

        </div>

       
       
      
    </div>
  )
}

export default Prog

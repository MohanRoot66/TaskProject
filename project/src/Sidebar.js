import React from 'react'
import "./index.css"
import SideNavbar from './SideNavbar'
import Content from './Content'
import Item from './Item'
import { faCalendarDays,faDatabase, faSackDollar,faChartSimple} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className='container'>
        <div className='sidebar'>
        <SideNavbar/>
        <Content/>

        </div>
        <div className='sidebar'>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%' }}>
                <Item icon={faCalendarDays} title="Sep 2019 (2yrs,4mon)" desc="Inception" />
                <Item icon={faSackDollar}  title="Undisclosed" desc="AUM in Cr"/>
               
              </div>

      
              <div style={{ display: 'flex',paddingTop:55, justifyContent: 'space-between', width: '85%' }}>
              <Item icon={faDatabase} title="246" desc="Number of Investments"/>
                <Item icon={faChartSimple} title="BSE 100" desc="Benchmark" />
              </div>
          </div>
        </div>
    </div>
  )
}

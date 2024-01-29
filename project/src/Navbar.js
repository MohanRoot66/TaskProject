import React, { useState } from 'react';
import "./index.css"
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import Drop from './Drop';


export default function Navbar({changeFunscore,setSelectedYear,changeBenchscore}) {

  return (
    <nav>
  <ul className='navbar'>
    <li>
    <ArrowCircleLeftSharpIcon/>
    </li>
    <li className='item1'>
        <img src=".//Images/Logo.jpg" alt='Company Logo'/>
    </li>
    <li className='item2'>
      Green Protfolio - Super 30
      <button>THEMATIC</button>
    </li>
    <li className='item3'>
      Filter By 
    </li>
    <li>
        <Drop changeFunscore={changeFunscore} changeBenchscore={changeBenchscore} setSelectedYear={setSelectedYear}/>
    </li>
  </ul>
</nav>

  );
}

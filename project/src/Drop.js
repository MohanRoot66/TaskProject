import React from 'react'
import { useState } from 'react';

export default function Drop({setSelectedYear,changeFunscore,changeBenchscore}) {
    const obj_funscore = 
    {
        2023:[2.3,2.3,2.3,2.3,2.3],
        2024:[2,3,2,1.2,3.4],
        2025:[3.4,4.5,3.5,2.3,4.5]
    }
    const obj_benchscore = 
    {
        2023:[2,3,2,1.2,3.4],
        2024:[2.3,3,4,2.3,2.3],
        2025:[3,2,1.5,2.3,1.5]
    }
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        setSelectedYear(selectedValue);
        changeFunscore(obj_funscore[selectedValue]);
        changeBenchscore(obj_benchscore[selectedValue])
      };
    
    const years = ['2022', '2023', '2024', '2025'];
    const [selectedOption, setSelectedOption] = useState(years[0]);


  
 
 
  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      {years.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
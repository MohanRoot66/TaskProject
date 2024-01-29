import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Bargraph from "./Bargraph"
import { useState } from "react";

function App() {
  const [Year, setSelectedYear] = useState("2022");

  const [funscore,changeFunscore] = useState([6.5, 4.6, 6.5, 6.5, 6.5])

 
  const [benchscore,changeBenchscore] = useState([6.5, 4.6, 6.5, 6.5, 6.5])
   

  return (
    <div>
      <Navbar setSelectedYear={setSelectedYear} changeBenchscore={changeBenchscore} changeFunscore={changeFunscore}/>
      <Sidebar/>
      <hr style={{marginLeft:"105px",width:"1305px"}}/>
      <Bargraph funscore={funscore} benchscore={benchscore}/>
    </div>
  );
}

export default App;

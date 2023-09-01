import { useState } from "react";
import Weather from "./Components/Weather";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [text, settext] = useState("")
  const [color,setcolor]=useState('dark')
  const [bgcolor,setbgcolor]=useState('white')
  const [btn_text,setbtn_text]=useState('')
  const handleClick = (e) => {
    settext(e.target.value)
  }
  const handleClick2 = () => {
    setShowAnotherComponent(!showAnotherComponent);
  };
  const area = text;

  const handleBackground=()=>{
      if(color==="dark" && bgcolor==='white'){
        setcolor('light')
        setbgcolor('black')
        setbtn_text('Enable light mode')
      }
      else{
        setcolor('dark')
        setbgcolor('white')
        setbtn_text('Enable Dark mode')
      }
  }

  return (
    <><div style={{backgroundColor:bgcolor}}>

    
      <input type="text" placeholder="Enter the area to Find" className="mx-5 my-3" value={text} onChange={handleClick} />
      <div className={`form-check form-switch text-${color}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={handleBackground} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{btn_text}</label>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleClick2}>Search</button>
        {showAnotherComponent && <Weather area={area} style={{backgroundColor:bgcolor}} />}

      </div>
      </div>
    </>
  );
}

export default App;

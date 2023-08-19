import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
      
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("The page has turned into darkMode","success")
      document.title='TextUtils -DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("The page has turned into lightMode","success")
      document.title='TextUtils -LightMode'



    }
  }
  return (
    <>  
    <BrowserRouter>
    <Navbar title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
    
      
    </div>
    </BrowserRouter>
    </>

  );
}

export default App;

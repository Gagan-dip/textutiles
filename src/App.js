// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; // this is a packege and it is install with the help of npm


function App() {
  const [mode ,setMode]=useState('light'); //Whether dark mode or Not?
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=>{
       setAlert(null);
       },1500);
}

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#021a37';
      showAlert("Dark mode has been Enable", "success")
      document.title = 'TextUtils - DarkMode';

      // setInterval(() => {
      //   document.title ='Textutiles is Amazing';    //showing Alert Message In title bar
      // }, 2000);
      // setInterval(() => {
      //   document.title ='Intall Textutiles Now' ;
      // }, 1500);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title = 'TextUtils - LightMode';
    }
  } 

  return (
    <>
 
{/* <Navbar /> */}
{/* <Navbar title="TextUtils" abouttext="About"/> */}
<Router>
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar title="TextUtils" /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>
             <Route exact path="/about" element={<About/>}>
              </Route>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to anaylize Below"  mode={mode}/>}>
               </Route>
         </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter the Text to anaylize Below"  mode={mode}/> */}
        {/* <TextForm heading="Enter the text to analyze below" mode={mode}/> */}

    </div>
</Router>



 </>
  );
}

export default App;

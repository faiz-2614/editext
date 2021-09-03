
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, {useState} from 'react'
import Alert from './Components/Alert';

function App() {
  const [mode, setmode] = useState("light")

  const changeBackGround = () =>{
    if (mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor ="grey"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor ="white"
    }
  }

  const [alert, setalert] = useState(null)

  const showAlert = (message,type)=>{
      setalert({
        message:message,
          type:type
      })
      setTimeout(()=>{
        setalert(null)},
        1500
      )
  }

  return (
    <>
    <Navbar mode={mode} changeBackGround={changeBackGround}/>
    <Alert alert={alert}/>
    <TextArea mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;

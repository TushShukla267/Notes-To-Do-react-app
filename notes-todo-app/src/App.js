// App.js
import "./App.css";
import Navbar from "./Components/Navbar";
import ToDo from "./Components/ToDo";
import Notes from "./Components/Notes";
import { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');
  const [textColor, setTextcolor] = useState({ color: 'black' });
  const [alert, setalert] = useState({ msg: "Hi there , this is made by Tushar J Shukla", type: "warning" });

  const ChangeMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setText('Enable Light Mode')
      document.body.style.backgroundColor = 'black';
      setTextcolor({
        color: 'white'
      })
      ShowAlert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      setTextcolor({
        color: 'black'
      })
      ShowAlert("Light mode has been enabled", "success")
    }
  }

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={ChangeMode} text={text} textcolor={textColor} />
        <Alert Alert={alert} />
        <div className="App">
        <Routes>
          <Route exact path="/ToDo's" element={<ToDo mode={mode} textcolor={textColor} showAlert={ShowAlert} />} />
          <Route exact path="/Notes" element={<Notes mode={mode} textcolor={textColor} showAlert={ShowAlert} />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

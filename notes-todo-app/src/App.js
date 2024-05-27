import "./App.css";
import Navbar from "./Components/Navbar";
import ToDo from "./Components/ToDo";
import Notes from "./Components/Notes";
import { useState } from "react";
import Alert from "./Components/Alert";

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
      <div className="App">
        <Navbar mode={mode} toggleMode={ChangeMode} text={text} textcolor={textColor} />
        <Alert Alert={alert} />
        <ToDo mode={mode} textcolor={textColor} />
        <Notes mode={mode} textcolor={textColor} />
      </div>
    </>
  );
}

export default App;

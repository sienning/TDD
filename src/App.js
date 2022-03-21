import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Intro from './components/Intro';

function App() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [size, setSize] = useState(0);
  const [message, setMessage] = useState("");

  const getFormInfos = (firstname, lastname, age, size, message) => {
    console.log("On a les infos : ", firstname);
    setFirstname(firstname);
    setLastname(lastname);
    setAge(age);
    setSize(size);
    setMessage(message);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div id='top' className="App">
      <header className="App-header">
        <Intro
          firstname={firstname}
          lastname={lastname}
          age={age}
          size={size}
          message={message}
        />
      </header>
      <div id="form" className="App-body">
        <Form
          getFormInfos={getFormInfos}
        />
      </div>
    </div>
  );
}

export default App;

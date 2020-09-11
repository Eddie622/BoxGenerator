import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const generateBox = (e) => {
    e.preventDefault();
    setBoxes([...boxes, color]);
    setColor("");
  }

  return (
    <div className="App">
      <form onSubmit={ generateBox }>
        <div>Enter Your Color:</div>
        <input type="text" onChange={ e => setColor(e.target.value) } value={color}></input>
        <input type="submit" value="Create Box" style={{display: "block", margin: "auto"}}></input>
        { boxes.map(boxValue => 
            <div style={{display: "inline-block", margin: "5px", height: "50px", width: "50px", backgroundColor: boxValue}}></div>
        )}
      </form>
    </div>
  );
}

export default App;

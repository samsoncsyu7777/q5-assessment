import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [wordsArray, setWordsArray] = useState([]);

  async function handleChange(e) {
    setText(e.target.value);
    await fetch("https://api.datamuse.com/words?ml=" + e.target.value)
    .then((res) => res.json())
    .then((data) => {
      setWordsArray(data);
    })
  }

  return (
    <div className="App">
      <input value={text} onChange={handleChange} />
      {wordsArray.map((word, index) => {return <p key={word.word + index}>{word.word}</p>})}
    </div>
  );
}

export default App;

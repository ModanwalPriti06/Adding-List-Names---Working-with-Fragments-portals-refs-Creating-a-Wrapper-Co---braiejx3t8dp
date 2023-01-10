import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
const print=()=>{
    let data=[...list];
    let newData={value};
    data.push(newData);
    setList(data);
  
}
  return (
    <div id="main">
       <input id="input" onChange={(e)=>setValue(e.target.value)}/>
      <button id="button" onClick={print}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;

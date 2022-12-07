import React, {useState, useEffect} from 'react'
// import logo from './logo.svg';
import './styling/App.css';
// import SearchBar from './components/SearchBar';
//import {useState} from "react"; // hook
import Data from "./mock-data.json"
import Item from "./components/Item.js"
import PostCompose from './components/PostCompose';

function App() {
  //query
  const [query, setQuery] = useState("")
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/get').then(res => res.json()).then(data => {
      console.log(data);
      setItems(data);
    });
  }, []);

  // retrieve preset data
  // initItems = []
  // if(!localStorage.getItem("items")){ // only runs the first
  //   var initItems = []
  //   Data.map((post) => (
  //     initItems.push(post) 
  //   ));
  //   localStorage.setItem("items", JSON.stringify(initItems));
  // } else {
  //   initItems = JSON.parse(localStorage.getItem("items"));
  // }
  
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <PostCompose></PostCompose>
        <input placeholder="Enter description of lost item, location/date you lost it at" onChange={event => setQuery(event.target.value)} />
        <div className = "postsDiv">
        {
          items.filter(items => { 
           // const x = Object.values(items).map(name => name.toString().toLowerCase())
           // console.log(x)
            if (query === '') {
              return items;
            } else if (Object.values(items).map(name => name.toString().toLowerCase()).some(
                it => it.includes(query.toLowerCase()))) 
            {
              return items;
            }
          }).map((item) => (
            <div className="box"> <Item data={item} /></div>
          ))
        }
        </div>
        
    </div>
  );
}

export default App;

        
        
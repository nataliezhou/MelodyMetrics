import React, {useState, useEffect} from 'react'
// import logo from './logo.svg';
import './styling/App.css';
// import SearchBar from './components/SearchBar';
//import {useState} from "react"; // hook
import Data from "./mock-data.json"
import Item from "./components/Item.js"
import PostCompose from './components/PostCompose';
import { useItemsStatus } from './components/ItemsHook';

function App() {
  // retrieve preset data
  initItems = []
  if(!localStorage.getItem("items")){ // only runs the first
    console.log("first")
    var initItems = []
    Data.map((post) => (
      initItems.push(post) 
    ));
    localStorage.setItem("items", JSON.stringify(initItems));
  } else {
    console.log("second")
    initItems = JSON.parse(localStorage.getItem("items"));
  }
  const [items, setItems] = useState(initItems);
  console.log(items);
  
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
        <input placeholder="Enter description of lost item, location/date you lost it at"/>
        <div className = "postBox">
          {
            items.map((item) => (
              <div className="box"> <Item data={item} /></div>
            ))
          }
        </div>
        




        
        {/* {Data.map((post) => (
          <div className="box" key={post.id}>
            <p>{post.item}</p>
            <p>{post.color}</p>
            <p>{post.location}</p>
            <p>{post.datetime}</p>
          </div>
})
} */}
        
        
        {/* <SearchBar /> */}
      {/* </header> */}
    </div>
  );
}


export default App;

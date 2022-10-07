// import logo from './logo.svg';
import './App.css';
// import SearchBar from './components/SearchBar';
import {useState} from "react";
import Data from "/Users/aditishah/Desktop/cs 222/course-project-group-39/lostandfound/src/mock-data.json"

function App() {
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
        <input placeholder="Enter description of lost item, location/date you lost it at"/>
        {
  Data.map((post) => (
    <div className="box" key={post.id}>
      <p>{post.item}</p>
      <p>{post.color}</p>
      <p>{post.location}</p>
      <p>{post.datetime}</p>
    </div>
  ))}







        
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

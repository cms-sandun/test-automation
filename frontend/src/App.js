import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{data && data.map((user) => <li>{user.name}</li>)}</ul>
      </header>
    </div>
  );
}

export default App;

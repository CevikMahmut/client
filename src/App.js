import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8001/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({key: "value" })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok"); 
      } 
      return response.json(); 
    }) 
    .then((data) => {
      setData(data.message);
    }) 
    .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
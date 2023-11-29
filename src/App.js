import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [variable, setVariable] = React.useState("Butona tıklanmadııı");
  
  const handleButtonClick = () => {
    var mesaj = "Hello Clickledin Bebek";
    setVariable(mesaj);
  };

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
        <button onClick={handleButtonClick}> Send POST Request </button>
        <p>{!data ? "Loading..." : data}</p>
        <p>{!variable ? "Butona Basılmadı": variable}</p>
      </header>
    </div>
  );
}

export default App;
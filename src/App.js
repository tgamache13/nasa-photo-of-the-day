import React from "react";
import "./App.css";
import axios from "axios";
import PhotoNasa from "./components/photoNasa";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoNasa />
    </div>
  );
}


export default App;

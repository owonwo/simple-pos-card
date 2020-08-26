import React from "react";
import "./App.css";
import POSFailureRateCard from "./components/POSFailureRateCard";

function App() {
  return (
    <div className="App justify-center items-center">
      <div className="flex flex-col">
        <POSFailureRateCard
          percentage="12%"
          surge={{ direction: "down", percentage: "14%" }}
        />
        <div style={{ margin: "10px" }}></div>
        <POSFailureRateCard
          percentage="16%"
          surge={{ direction: "up", percentage: "18%" }}
        />
      </div>
    </div>
  );
}

export default App;

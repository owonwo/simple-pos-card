import React from "react";
import POSFailureRateCard from "./components/POSFailureRateCard";

function App() {
  return (
    <div className="App justify-center items-center">
      <div className="flex flex-col">
        <POSFailureRateCard
          percentage="15%"
          layoutMode="minimal"
          surge={{ direction: "down", percentage: "14%" }}
        />
        <div style={{ margin: "10px" }}></div>
        <POSFailureRateCard
          percentage="65%"
          layoutMode="minimal"
          surge={{ direction: "up", percentage: "18%" }}
        />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import BarChart from "./page/BarChart";
import LineChart from "./page/LineChart";
import PieChart from "./page/PieChart";
import { UserData } from "./page/Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.usergain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <h1 style={{color:"teal",fontWeight:'bolder',fontSize:"50px"}}>CHART DATA</h1>
      <div style={{ width: 700,marginTop:"100px",marginLeft:"300px" }}>
      <h1>Bar Chart Data</h1>
        <BarChart chartData={userData} />
      </div>

      <div style={{ width: 700,marginTop:"200px",marginLeft:"300px" }}>
        <h1>Line Chart Data</h1>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700,marginLeft:"300px",marginTop:"200px"}}>
      <h1>Pie Chart Data</h1>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom";
import TaskBoard from "./task/TaskBoard";
// import Board from "./chess/Board";
// import { observe } from "./chess/Game";
import "./styles.css";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <TaskBoard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

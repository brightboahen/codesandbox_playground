import React, { Component } from "react";

class TaskBoard extends Component {
  _renderChildrenOnBoard() {
    return [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      16,
      17,
      18,
      19,
      20
    ].map(item => <div style={styles.board}>{item}</div>);
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>{this._renderChildrenOnBoard()}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    //display: "flex",
    //flex: 1,
    //width: "100%",
    //flexDirection: "row",
    backgroundColor: "red",
    //flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden"
  },
  innerContainer: {
    //width: "200%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "green"
  },
  board: {
    width: "30%",
    backgroundColor: "black",
    margin: "10px auto",
    color: "#fff",
    margin: 10,
    display: "flex"
    // flexDirection: "column"
  }
};

export default TaskBoard;

import React from "react";
import { ItemTypes } from "./Constants";
import { DragSource } from "react-dnd";

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

console.log(knightSource);

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Knight({ connectDragSource, isDragging }) {
  return connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      &#9822;
    </div>
  );
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);

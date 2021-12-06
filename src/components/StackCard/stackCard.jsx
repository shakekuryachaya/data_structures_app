import React from "react";
import "./stackcard.css";
function StackCard({ el }) {
  return (
    <div className="card">
      <img src={el.url} alt="" />
      <div
        style={{
          marginTop: "1rem",
        }}
      ></div>
      <div className="stackCard">
        <div className="name">Title : {el.title}</div>
        <div className="name">Center : {el.location}</div>
      </div>
    </div>
  );
}

export default StackCard;

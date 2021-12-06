import "./simple.css";
import React from "react";

function SimpleCard({ el }) {
  return (
    <div className="card">
      <div className="">
        <div className="name">Title : {el.title}</div>
        <div className="name">Descrition : {el.description}</div>
      </div>
    </div>
  );
}

export default SimpleCard;

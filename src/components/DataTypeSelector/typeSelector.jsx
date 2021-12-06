import React from "react";
import "./typeSelector.css";
function TypeSelector({ typeSelector, setTypeSelector, typeOptions }) {
  const changeType = (type) => {
    setTypeSelector(type);
    return true;
  };
  return (
    <div className="type">
      <div
        className={`typebtn ${
          typeSelector === typeOptions.json ? "typebtn_active" : ""
        }`}
        onClick={() => {
          changeType(typeOptions.json);
        }}
      >
        JSON
      </div>
      <div
        className={`typebtn ${
          typeSelector === typeOptions.array ? "typebtn_active" : ""
        }`}
        onClick={() => {
          changeType(typeOptions.array);
        }}
      >
        Array
      </div>
      <div
        className={`typebtn ${
          typeSelector === typeOptions.hashMap ? "typebtn_active" : ""
        }`}
        onClick={() => {
          changeType(typeOptions.hashMap);
        }}
      >
        Hash Map
      </div>
      <div
        className={`typebtn ${
          typeSelector === typeOptions.stack ? "typebtn_active" : ""
        }`}
        onClick={() => {
          changeType(typeOptions.stack);
        }}
      >
        Stack
      </div>
    </div>
  );
}

export default TypeSelector;

import React, { useState } from "react";
import "./inputFeild.css";
function InputFeild({ setInput }) {
  const [input, setInputs] = useState("");
  return (
    <div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            onChange={(e) => {
              setInputs(e.target.value);
            }}
            placeholder="What are you looking for?"
          />
          <button
            onClick={() => {
              setInput(input);
            }}
            type="submit"
            class="searchButton"
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputFeild;

import React, { useState } from "react";
import add from "../Icons/plus-circle-regular-48.png";

function Input({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTask(text);
      setText("");
    }
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="addButton">
          <img src={add} height="26px" alt="add-icon" />
        </button>
      </form>
    </div>
  );
}

export default Input;

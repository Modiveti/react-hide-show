import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [isChecked, setChecked] = useState(false);
  return (
    <div className="App">
      <label
        className="checkBox_continaer"
        onChange={() => setChecked(isChecked => !isChecked)}
      >
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={false}
          checked={isChecked}
        />
        <span className="label_checkbox">Show/Hide data</span>
      </label>
      {isChecked && (
        <span className="information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          obcaecati sit.
        </span>
      )}
    </div>
  );
}

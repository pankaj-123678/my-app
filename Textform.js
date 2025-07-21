import React, { useState } from "react";
// ✔️ Required at top of file where Link is used
import { Link } from "react-router-dom";

import propTypes from "prop-types";

export default function Textform(props) {
  const handleclick = () => {
    console.log("uppercase was click" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleonchange = (event) => {
    console.log(" on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("enter your text");
  return (
    <>
      <div className="container">
        <div className="mb-3"></div>
        <div className="mb-0 ">
          <h3 className="mb-2"> {props.heading}</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary mt-3 pill-rounded px-3"
            onClick={handleclick}
          >
            Convert To Uppercase
          </button>
        </div>
      </div>
      <div className="container my-3">
        <p>
          {text.split("").length} words and {text.length}characters <br></br>
          {0.008 * text.split("").length}min. words {text.length}
        </p>
        <p>{text}</p>
      </div>
    </>
  );
}

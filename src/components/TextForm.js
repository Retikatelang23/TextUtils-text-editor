import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase!", "success");
  };

  const handleClearClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#E9B5B1" }}
      >
        <h2 className="my-2">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#E9B5B1" : "white",
              color: props.mode === "dark" ? "black" : "#E9B5B1",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-light mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-light mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-light mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-light mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-light mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <div
          className="container my-2"
          style={{ color: props.mode === "dark" ? "white" : "#151B54" }}
        >
          <h2>Your text summary</h2>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
      </div>
    </>
  );
}

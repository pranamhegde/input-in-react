import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("translation:");

  function inputChangeHandler(event) {
    //console.log(event.target.value);

    var userInput = event.target.value;
    setEmoji(userInput);

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      meaning = "we don't have this in our database";
    }
  }

  function emojiClickHandler(userInput) {
    setMeaning(emojiDictionary[userInput]);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <input
        onChange={inputChangeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h2> {meaning} </h2>
      <h3>emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", padding: "0.5rem", fontSize: "2rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

import "./styles.css";
import React, { useState } from "react";
var objectDictionary = {
  "π": "Love letter",
  "π£": "Bomb",
  "πͺ": "Knife",
  "πΊοΈ": "World map",
  "π’οΈ": "Oil drum",
  "β°": "Alarm clock",
  "π‘οΈ": "Thermometer",
  "π": "Baloon",
  "π": "Party popper",
  "πΉοΈ": "Joystick",
  "π§΅": "Thread",
  "π±": "Mobile phone",
  "π": "DVD",
  "π»": "Laptop",
  "π§²": "Magnet",
  "π": "Pill",
  "π": "Syringe"
};

var objectemojiList = Object.keys(objectDictionary);

export default function App() {
  var [emomeaning, setemoMeaning] = useState("");
  function inputHolder(event) {
    var inputEmoji = event.target.value;
    var emomean = objectDictionary[inputEmoji];
    if (emomean === undefined) {
      emomean = "Sorry! unable to recognize";
    }
    setemoMeaning(emomean);
  }
  function eclickHandler(emoji) {
    var emomeans = objectDictionary[emoji];
    setemoMeaning(emomeans);
  }

  return (
    <div className="App">
      <h1 style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
        Object Interpretor
      </h1>

      <input
        style={{ minWidth: "70rem", padding: "0.5rem", height: "7vh" }}
        onChange={inputHolder}
        placeholder="Search your object"
      />

      <h2 style={{ padding: "1rem" }}>{emomeaning}</h2>

      <h2 style={{ paddingTop: "1rem" }}>
        {objectemojiList.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => eclickHandler(emoji)}
              style={{
                cursor: "pointer",
                paddingLeft: "2rem"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </h2>
    </div>
  );
}

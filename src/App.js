import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇" : "Grapes",
  "🍈" : "Melon",
  "🍉" : "Watermelon",
  "🍊" : "Tangerine",
  "🍋" : "Lemon",
  "🍌" : "Banana",
  "🍍" : "Pineapple",
  "🥭" : "Mango",
  "🍎" : "Red Apple",
  "🍏" : "Green Apple",
  "🍐" : "Pear",
  "🍑" : "Peach",
  "🍒" : "Cherries",
  "🍓" : "Strawberry",
  "🥝" : "Kiwi Fruit",
  "🍅" : "Tomato",
  "🥥" : "Coconut",
  "🥑" : "Avocado",
  "🍆" : "Eggplant",
  "🥔" : "Potato",
  "🥕" : "Carrot",
  "🌽" : "Ear of Corn",
  "🌶️" : "Hot Pepper",
  "🥒" : "Cucumber",
  "🥬" : "Leafy Green",
  "🥦" : "Broccoli",
  "🧄" : "Garlic",
  "🧅" : "Onion",
  "🍄" : "Mushroom",
  "🥜" : "Peanuts",
  "🌰" : "Chestnut",
  "🍞" : "Bread",
  "🥐" : "Croissant",
  "🥖" : "Baguette Bread",
  "🥨" : "Pretzel",
  "🥯" : "Bagel",
  "🥞" : "Pancakes",
  "🧇" : "Waffle",
  "🧀" : "Cheese Wedge",
  "🍖" : "Meat on Bone",
  "🍗" : "Poultry Leg",
  "🥩" : "Cut of Meat",
  "🥓" : "Bacon",
  "🍔" : "Hamburger",
  "🍟" : "French Fries",
  "🍕" : "Pizza",
  "🌭" : "Hot Dog",
  "🥪" : "Sandwich",
  "🌮" : "Taco",
  "🌯" : "Burrito",
  "🥙" : "Stuffed Flatbread",
  "🧆" : "Falafel",
  "🥚" : "Egg",
  "🍳" : "Cooking",
  "🥘" : "Shallow Pan of Food",
  "🍲" : "Pot of Food",
  "🥣" : "Bowl with Spoon",
  "🥗" : "Green Salad",
  "🍿" : "Popcorn",
  "🧈" : "Butter",
  "🧂" : "Salt",
  "🥫" : "Canned Food",
  "🍱" : "Bento Box",
  "🍘" : "Rice Cracker",
  "🍙" : "Rice Ball",
  "🍚" : "Cooked Rice",
  "🍛" : "Curry Rice",
  "🍜" : "Steaming Bowl",
  "🍝" : "Spaghetti",
  "🍠" : "Roasted Sweet Potato",
  "🍢" : "Oden",
  "🍣" : "Sushi",
  "🍤" : "Fried Shrimp",
  "🍥" : "Fish Cake with Swirl",
  "🥮" : "Moon Cake",
  "🍡" : "Dango",
  "🍱" : "Bento Box",
  "🍘" : "Rice Cracker",
  "🍙" : "Rice Ball",
  "🍚" : "Cooked Rice",
  "🍛" : "Curry Rice",
  "🍜" : "Steaming Bowl",
  "🍝" : "Spaghetti",
  "🍠" : "Roasted Sweet Potato",
  "🍢" : "Oden",
  "🍣" : "Sushi",
  "🍤" : "Fried Shrimp",
  "🍥" : "Fish Cake with Swirl",
  "🥮" : "Moon Cake",
  "🍡" : "Dango",
  "🥟" : "Dumpling",
  "🥠" : "Fortune Cookie",
  "🥡" : "Takeout Box",
  "🦪" : "Oyster",
  "🍦" : "Soft Ice Cream",
  "🍧" : "Shaved Ice",
  "🍨" : "Ice Cream",
  "🍩" : "Doughnut",
  "🍪" : "Cookie",
  "🎂" : "Birthday Cake",
  "🍰" : "Shortcake",
  "🧁" : "Cupcake",
  "🥧" : "Pie",
  "🍫" : "Chocolate Bar",
  "🍬" : "Candy",
  "🍭" : "Lollipop",
  "🍮" : "Custard",
  "🍯" : "Honey Pot",
  "🍼" : "Baby Bottle",
  "🥛" : "Glass of Milk",
  "☕" : "Hot Beverage",
  "🍵" : "Teacup Without Handle",
  "🍶" : "Sake",
  "🍾" : "Bottle with Popping Cork",
  "🍷" : "Wine Glass",
  "🍸" : "Cocktail Glass",
  "🍹" : "Tropical Drink",
  "🍺" : "Beer Mug",
  "🍻" : "Clinking Beer Mugs",
  "🥂" : "Clinking Glasses",
  "🥃" : "Tumbler Glass",
  "🥤" : "Cup with Straw",
  "🧃" : "Beverage Box",
  "🧉" : "Mate",
  "🧊" : "Ice",
  "🥢" : "Chopsticks",
  "🍽️" : "Fork and Knife with Plate",
  "🍴" : "Fork and Knife",
  "🥄" : "Spoon"

 

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

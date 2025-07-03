const btn = document.querySelector("#emoji");
const emojis =
  "😊😂🤣❤️😍😒👌😘💕😁👍🙌🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️✌️🤞😉😎🎶😢💖😜😚☺️🤨😐😑😣😏😶‍🌫️😯😛😜😝🤤😒🫠🙃🫤😕😔😓🤑😲☹️🙁😖😞😰😵🤪😳🥶🥵😱😨😩🤯😬😮‍💨😦😢😤😠😡🤮🤢🤕🤒🤓🤓😈👿";

const emojiArray = Array.from(emojis);

btn.addEventListener("mouseover", () => {
  btn.textContent = emojiArray[Math.floor(Math.random() * emojiArray.length)];
});

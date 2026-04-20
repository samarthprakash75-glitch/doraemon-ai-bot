
let userName = "friend";

// 👤 NAME LOAD
function loadName() {
  let name = localStorage.getItem("username");
  if (name) userName = name;
}
loadName();

// 🎲 RANDOM REPLY
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🤖 AI REPLY SYSTEM
function getReply(input) {
  input = input.toLowerCase();

  if (input.includes("sleep")) {
    return random([
      "Abhi so jao warna kal late uthoge 😤",
      "Phone chhodo aur sojao 😑"
    ]);
  }

  if (input.includes("happy")) {
    return random([
      "Yayyy 😄 mujhe bhi khushi hui!",
      "Tum khush ho to main bhi 😆"
    ]);
  }

  if (input.includes("hungry")) {
    return "Doracake khaate hain 😍";
  }

  if (input.includes("sad")) {
    return "Kya hua 😔 main hoon na";
  }

  return "Bolo " + userName + " 🤖";
}

// 💬 MESSAGE SEND
function sendMessage() {
  let input = document.getElementById("input").value;

  if (!input) return;

  let reply = getReply(input);

  document.getElementById("chat").innerHTML += 
    "<p><b>You:</b> " + input + "</p>" +
    "<p><b>Doraemon:</b> " + reply + "</p>";
}

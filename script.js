// 👤 USER NAME
let userName = "friend";

// LOAD NAME
function loadName() {
  let name = localStorage.getItem("username");
  if (name) userName = name;
}
loadName();

// RANDOM REPLY
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🤖 AI REPLY SYSTEM (EMOTIONS)
function getReply(input) {
  input = input.toLowerCase();

  if (input.includes("sleep")) {
    return random([
      "Nobitaaa 😪 abhi sojao warna kal fir late uthoge!",
      "Tum fir se late tak jag rahe ho 😤 sojao!"
    ]);
  }

  if (input.includes("happy")) {
    return random([
      "Yayyy 😄 mujhe bhi khushi hui!",
      "Tum khush ho to main bhi happy 💙"
    ]);
  }

  if (input.includes("hungry")) {
    return random([
      "Chalo doracake khate hain 😍",
      "Mujhe bhi bhook lagi hai 😋 doracake!"
    ]);
  }

  if (input.includes("sad")) {
    return random([
      "Kya hua 😔 main hoon na",
      "Don't worry Nobita 💙 sab thik ho jayega"
    ]);
  }

  if (input.includes("angry")) {
    return "Gussa mat karo 😤 shant ho jao!";
  }

  if (input.includes("excited")) {
    return "Woooo 😆 mujhe bhi excitement ho rahi hai!";
  }

  if (input.includes("doracake")) {
    return "Doracake mera favorite hai 😍";
  }

  return "Bolo " + userName + " 🤖";
}

// 💬 SEND MESSAGE WITH ANIMATION
function sendMessage() {
  let input = document.getElementById("input").value;
  if (!input) return;

  let chat = document.getElementById("chat");

  // USER MESSAGE
  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = input;
  chat.appendChild(userMsg);

  document.getElementById("input").value = "";

  // TYPING ANIMATION
  let typing = document.createElement("div");
  typing.className = "message bot typing";
  typing.innerHTML = `
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `;
  chat.appendChild(typing);

  chat.scrollTop = chat.scrollHeight;

  // DELAY = thinking
  setTimeout(() => {
    typing.remove();

    let botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = getReply(input);

    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;

  }, 1200);
}

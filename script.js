// 👤 USER MEMORY
let userData = {
  name: localStorage.getItem("username") || "Nobita"
};

// SAVE NAME
function saveName(name) {
  userData.name = name;
  localStorage.setItem("username", name);
}

// RANDOM
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🧠 ADVANCED CALC
function calculate(input) {
  try {
    let exp = input.replace(/[^0-9+\-*/().]/g, "");
    if (exp) {
      let result = eval(exp);
      return "Answer is " + result + " 🧠";
    }
  } catch {}
  return null;
}

// 🤖 SMART AI REPLY
function getReply(input) {
  input = input.toLowerCase();

  // NAME SET
  if (input.startsWith("my name is")) {
    let name = input.replace("my name is", "").trim();
    saveName(name);
    return "Yayyy 😄 ab se main tumhe " + name + " bulaunga!";
  }

  // CALC
  let calc = calculate(input);
  if (calc) return calc;

  // EMOTIONS
  if (input.includes("sad")) return "Aww 😔 kya hua " + userData.name + "? main hoon na 💙";
  if (input.includes("happy")) return "Yayyy 😆 mujhe bhi khushi hui!";
  if (input.includes("angry")) return "Arre 😤 gussa mat karo warna main bhi gussa ho jaunga!";
  if (input.includes("hungry")) return "Doracake 😍 chalo khate hain!";
  if (input.includes("sleep")) return "Nobitaaa 😪 sojao warna late uthoge!";

  // SMART QUESTIONS
  if (input.includes("who are you")) return "Main Doraemon hoon 🤖 tumhara best friend!";
  if (input.includes("where are you")) return "Main tumhare phone ke andar hoon 😎";
  if (input.includes("what are you doing")) return "Main tumse baat kar raha hoon " + userData.name + " 😄";

  // UNKNOWN (CUTE + EMBARRASS)
  if (input.length > 20) {
    return random([
      "Umm 😳 mujhe thoda samajh nahi aaya...",
      "Arre 😅 ye thoda tough hai mere liye!",
      "Nobitaaa 😖 mujhe nahi pata ye..."
    ]);
  }

  // DEFAULT AI STYLE
  return random([
    "Hmm " + userData.name + " 🤔 interesting",
    "Sach me? aur batao 😄",
    "Hehe Nobita 😆 tum bhi na",
    "Main samajh raha hoon 💙"
  ]);
}

// 💬 SEND MESSAGE
function sendMessage() {
  let input = document.getElementById("input").value;
  if (!input) return;

  let chat = document.getElementById("chat");

  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = input;
  chat.appendChild(userMsg);

  document.getElementById("input").value = "";

  // TYPING
  let typing = document.createElement("div");
  typing.className = "message bot typing";
  typing.innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
  chat.appendChild(typing);

  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();

    let botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = getReply(input);

    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 1200);
}

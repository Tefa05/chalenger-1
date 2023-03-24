const ACTIONS = {
  encrypt: [
    {
      origin: /e/g,
      target: "enter",
    },
    {
      origin: /i/g,
      target: "imes",
    },
    {
      origin: /a/g,
      target: "ai",
    },
    {
      origin: /o/,
      target: "ober",
    },
    {
      origin: /u/,
      target: "ufat",
    },
  ],

  decript: [
    {
      origin: /enter/g,
      target: "e",
    },
    {
      origin: /imes/g,
      target: "i",
    },
    {
      origin: /ai/g,
      target: "a",
    },
    {
      origin: /ober/g,
      target: "o",
    },
    {
      origin: /ufat/,
      target: "u",
    },
  ],
};

const convertTextTo = (text, isEncryp = true) => {
  let actionsList = [];

  if (isEncryp) {
    actionsList = ACTIONS.encrypt;
  } else {
    actionsList = ACTIONS.decript;
  }

  // action = isEncryp ? ACTIONS.encrypt : ACTIONS.decript;

  for (let index = 0; index < actionsList.length; index++) {
    const action = actionsList[index];
    text = text.replace(action.origin, action.target);
  }

  return text;
};

///////////////DOM Y EVENTOS ////////////////////////////////////////

//botones
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecript = document.getElementById("btn-decript");

//funciones
const setText = (isEncryp) => {
  const userText = document.getElementById("userText");
  const empty = document.getElementById("empty");
  const result = document.getElementById("result");

  if (!userText.value) {
    alert("Se debe agregar un texto.");
  } else {
    const newText = convertTextTo(userText.value, isEncryp);
    empty.classList.add("empty");
    result.classList.remove("empty");
    result.innerText = newText;
  }
};

///eventos
btnEncrypt.addEventListener("click", () => {
  setText(true);
});

btnDecript.addEventListener("click", () => {
  setText(false);
});

console.log({ userText });

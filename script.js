const channels = [
  {
    name: "Road to be a Master",
    image: "assets/road.png"
  },
  {
    name: "Quiz",
    image: "assets/quiz.png"
  }
];

const menu = document.getElementById("menu");
const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");

channels.forEach((ch, index) => {
  const div = document.createElement("div");
  div.className = "channel";

  div.innerHTML = `
    <img src="${ch.image}">
    <p>${ch.name}</p>
  `;

  div.onclick = () => openChannel(ch.name);
  div.onmouseenter = () => hoverSound.play();

  menu.appendChild(div);
});

function openChannel(name) {
  clickSound.play();

  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("title").innerText = name;
}

function start() {
  clickSound.play();

  document.body.style.transition = "0.5s";
  document.body.style.opacity = 0;

  setTimeout(() => {
    console.log("Aqui começa o vídeo");
  }, 500);
}

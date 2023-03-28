const kits = ["dog", "elephant","peacock", "snake"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit ;
  btnEl.style.backgroundImage = "url(images/" + kit + ".jfif)";

  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", ()=>{
    audioEl.play();

  });

  window.addEventListener("keydown", (event)=>{
    if (event.key === kit.slice(0,1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(()=>{
        transform = "scale(1)";
      },100);

    }
  });


});

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("mouseover",(event)=>{
  const x = event.pageX - btnEl.offsetLeft;

  const y = event.pageY - btnEl.offsetTop;


    btnEl.style.setProperty("--xPos", x + "px");

    btnEl.style.setProperty("--yPos", y + "px");
});

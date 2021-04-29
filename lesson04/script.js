let targets = Array.from(document.getElementsByClassName("kinoko"));

targets.forEach((target) => {
  target.addEventListener("click", (e) => {
    document.getElementById("main").src = e.srcElement.currentSrc;
  });
});
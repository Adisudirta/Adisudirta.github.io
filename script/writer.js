var typeContainer = document.querySelector(".type-writter");

var typewriter = new Typewriter(typeContainer, {
  loop: true,
  delay: 250,
});

typewriter
  .pauseFor(2500)
  .typeString("Yuhuuu !")
  .pauseFor(1000)
  .deleteChars(8)
  .typeString("こんにちは")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString("안녕")
  .pauseFor(1000)
  .deleteChars(2)
  .start();

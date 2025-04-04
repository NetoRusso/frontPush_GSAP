console.log("Main conectado");

const aula2 = document.querySelector(".aula-2");

gsap.set(aula2, {
  x: 0,
  y: 0,
  skewX:"-30deg",
});


const aula3 = document.querySelector(".aula-3");

gsap.to(aula3, .5, {
  y: 100,
  rotateY: 180,
})
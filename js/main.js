console.log("Main conectado");

const aula2 = document.querySelector(".aula-2");
const btn2 = document.getElementById("btn-anima-2");
const reset2 = document.getElementById("btn-reset-2");

reset2.disabled = true;

btn2.addEventListener("click", () => {
  gsap.set(aula2, {
    x: 0,
    y: 0,
    skewX: "-30deg",
  });

  btn2.disabled = true;
  reset2.disabled = false;
});

reset2.addEventListener("click", () => {
  gsap.set(aula2, {
    x: 0,
    y: 0,
    skewX: "0deg",
  });
  btn2.disabled = false;
  reset2.disabled = true;
});


const aula3 = document.querySelector(".aula-3");
const btn3 = document.getElementById("btn-anima-3");
const reset3 = document.getElementById("btn-reset-3");

reset3.disabled = true;


btn3.addEventListener("click", () => {
  gsap.to(aula3, .5, {
    y: 100,
    rotateY: 180,
  })
  btn3.disabled = true;
  reset3.disabled = false;
});

reset3.addEventListener("click", () => {
  gsap.to(aula3, .5, {
    y: 0,
    rotateY: 0,
  })
  btn3.disabled = false;
  reset3.disabled = true;
});

const aula4 = document.querySelector(".aula-4");
const btn4 = document.getElementById("btn-anima-4");
const reset4 = document.getElementById("btn-reset-4");

reset4.disabled = true;


btn4.addEventListener("click", () => {
  gsap.from(aula4, {
    scaleY: 0.2,
    scaleX: 0.3,
    opacity: 0.1,
    duration: 1.5,
  });
  btn4.disabled = true;
  reset4.disabled = false;
});

reset4.addEventListener("click", () => {
  btn4.disabled = false;
  reset4.disabled = true;
});

const aula5 = document.querySelector(".aula-5");
const btn5 = document.getElementById("btn-anima-5");
const reset5 = document.getElementById("btn-reset-5");

reset5.disabled = true;

btn5.addEventListener("click", () => {
  gsap.fromTo(aula5, {
    rotateX: "-180deg",
  }, {
    rotateX: "980deg",
    duration: 2.5,
    ease: "circ.inOut",
  });

  btn5.disabled = true;
  reset5.disabled = false;
});

reset5.addEventListener("click", () => {
  gsap.to(aula5, {
    rotateX: "0deg",
    duration: 1,
    ease: "circ.inOut",
  })
  btn5.disabled = false;
  reset5.disabled = true;
});

const listaItem6 = document.querySelectorAll(".aula-6 .item");
const btn6 = document.getElementById("btn-anima-6");
const reset6 = document.getElementById("btn-reset-6");

reset6.disabled = true;

btn6.addEventListener("click", () => {

  TweenMax.staggerFromTo(listaItem6, 2, {
    scale: 0,
    rotate: "0deg",
  }, {
    scale: 1,
    rotate: "360deg"
  }, 0.2)

});

const aula7 = document.querySelector(".aula-7");
const listaItem7 = document.querySelectorAll(".aula-7 .item");
const btn7 = document.getElementById("btn-anima-7");
const reset7 = document.getElementById("btn-reset-7");

reset7.disabled = true;

animacoesAula7 = [];

btn7.addEventListener("click", () => {

  listaItem7.forEach((item, index) => {

    const marginRight = parseFloat(window.getComputedStyle(item).marginRight);
    const marginLeft = parseFloat(window.getComputedStyle(item).marginLeft);
    const itemWidth = parseFloat(window.getComputedStyle(item).width);

    const animacao = gsap.fromTo(item, {
      rotate: "0deg",
      y: 0,
      x: 0,
      backgroundColor: (index === 0) ? "red" : (index === 2) ? "blue" : "green",
    }, {
      rotate: "360deg",
      y: 100,
      x: (index === 0) ? (itemWidth + marginLeft * 2) : (index === 2) ? -(itemWidth + marginRight * 2) : 0,
      duration: 2.5,
      backgroundColor: "transparent",
      boxShadow: "0 0 32px",
      ease: "elastic.inOut(1,0.3)",
      delay: index * 0.3,
      yoyo: true,
      repeat: -1,
    })
    animacoesAula7.push(animacao)
  });

  btn7.disabled = true;
  reset7.disabled = false;
});

reset7.addEventListener("click", () => {

  animacoesAula7.forEach(animacao => animacao.kill());

  listaItem7.forEach((item, index) => {
    gsap.to(item, {
      rotate: "0deg",
      y: 0,
      x: 0,
      backgroundColor: (index === 0) ? "#e8b4b4" : (index === 2) ? "#8db9e7" : "#a6d5a7",
      boxShadow: "0 0 16px",
      duration: 1,
      ease: "elastic.inOut(1,0.3)",
      delay: index * 0.3,
    })
  });

  btn7.disabled = false;
  reset7.disabled = true;
});

const aula8 = document.querySelector(".aula-8");
const listaItem8 = document.querySelectorAll(".aula-8 .item");
const btn8 = document.getElementById("btn-anima-8");
const reset8 = document.getElementById("btn-reset-8");

reset8.disabled = true;

listaItem8.forEach((item, index) => {
  item.style.cursor = "pointer";

  item.addEventListener("click", () => {
    reset8.disabled = false;
    gsap.to(item, {
      scale: 1.2,
      duration: 2.5,
      ease: "elastic.inOut(1,0.3)",
      delay: 0,
      onStart: () => {
        const itens = Array.from(listaItem8).filter((i, idx) => index !== idx)

        itens.forEach((outroItem) => {
          gsap.to(outroItem, {
            scale: 0.8,
            duration: 0.5,
            ease: "elastic.inOut(1,0.3)",
          })

        })
      },
    }
    );
  })
});

btn8.addEventListener("click", () => {
  listaItem8.forEach((item, index) => {
    gsap.to(item, {
      scale: 1.2,
      duration: 2.5,
      ease: "elastic.inOut(1,0.3)",
      delay: index * 0.3,
    })
  })

  btn8.disabled = true;
  reset8.disabled = false;
});

reset8.addEventListener("click", () => {
  listaItem8.forEach((item, index) => {
    gsap.to(item, {
      scale: 1,
      duration: 1,
      ease: "elastic.inOut(1,0.3)",
      delay: index * 0.3,
    })
  })
  btn8.disabled = false;
  reset8.disabled = true;
});


const aula9 = document.querySelector(".aula-9");
const listaItem9 = document.querySelectorAll(".aula-9 .item");
const btn9 = document.getElementById("btn-anima-9");
const reset9 = document.getElementById("btn-reset-9");

reset9.disabled = true;

btn9.addEventListener("click", () => {
  listaItem9.forEach((item, index) => {

    gsap.fromTo(item, {
      rotateX: "0deg",
      rotateY: "0deg",
    }, {
      rotateX: `${(index + Math.random()) * 475}deg`,
      rotateY: `${(index + Math.random()) * 560}deg`,
      duration: 1,
      ease: "elastic.inOut(1,0.3)",
      delay: (index + 1) * Math.random(),
    })
  });
  btn9.disabled = true;
  reset9.disabled = false;
});

reset9.addEventListener("click", () => {
  listaItem9.forEach((item, index) => {
    gsap.to(item, {
      rotateY: "0deg",
      rotateX: "0deg",
      duration: 1,
      ease: "elastic.inOut(1,0.3)",
      delay: index * 0.3,
    })
  });
  btn9.disabled = false;
  reset9.disabled = true;
});

const aula10 = document.querySelector(".aula-10");
const listaItem10 = document.querySelectorAll(".aula-10 .item");
const btn10 = document.getElementById("btn-anima-10");
const reset10 = document.getElementById("btn-reset-10");
const title = document.querySelector(".aulas-10 h2");
const paragrafo = document.querySelector(".aulas-10 p");

reset10.disabled = true;

btn10.addEventListener("click", () => {

  const tl = gsap.timeline();

  tl.from(title, .5, { x: -500, opacity: 0 })

  .from(paragrafo, .5, { x: -500, opacity: 0, }, "-=.3")
  
  .from(aula10, .5, { x: -500, opacity: 0, }, "container");


  listaItem10.forEach((item, index) => {
    // tl.from(item, { rotateX: "-280deg", delay: (index + 1) * Math.random() * 0.1}, "container-=.02");
    tl.from(item, { rotateX: `-${(index + 1) * Math.random() * 360}deg`,}, `< ${(index + 1) * Math.random() * 0.1}`);
  })

});

const aula10_2 = document.querySelectorAll(".aula-10-2");
const listaItem10_2 = document.querySelectorAll(".aula-10-2 .item");
const title10_2 = document.querySelector(".aulas-10-2 h2");
const paragrafo10_2 = document.querySelector(".aulas-10-2 p");
const play10_2 = document.getElementById("play");
const pause10_2 = document.getElementById("pause");
const resume10_2 = document.getElementById("resume");
const reverse10_2 = document.getElementById("reverse");
const restart10_2 = document.getElementById("restart");
const rapido10_2 = document.getElementById("rapido");
const lento10_2 = document.getElementById("lento");
const normal10_2 = document.getElementById("normal");



gsap.set(title10_2, {x: 0, opacity: 1}, paragrafo10_2, {x: 0, opacity: 1}, aula10_2, {x: 0, opacity: 1});

const tl10_2 = gsap.timeline({paused: true});

tl10_2.fromTo(title10_2, .5, { x: 0, opacity: 1 }, { x: -500, opacity: 0 })

.fromTo(paragrafo10_2, .5, { x: 0, opacity: 1 }, { x: -500, opacity: 0, }, "-=.3")

.fromTo(aula10_2, .5, { x: 0, opacity: 1 }, { x: -500, opacity: 0, }, "-=.3");

listaItem10_2.forEach((item, index) => {
  // tl.from(item, { rotateX: "-280deg", delay: (index + 1) * Math.random() * 0.1}, "container-=.02");
  tl10_2.fromTo(item, { rotateX: "0deg", }, { rotateX: `-${(index + 1) * Math.random() * 360}deg`,},  `< ${(index + 1) * Math.random() * 0.1}`);
})

play10_2.addEventListener("click", () => {
  console.log("Play");
  tl10_2.timeScale(1).play();
});

pause10_2.addEventListener("click", () => {
  console.log("Pause");
  tl10_2.pause();
});

resume10_2.addEventListener("click", () => {
  console.log("Resume");
  tl10_2.resume();
});

reverse10_2.addEventListener("click", () => {
  console.log("Reverse");
  tl10_2.reverse();
});

restart10_2.addEventListener("click", () => {
  console.log("Restart");
  tl10_2.timeScale(1).restart();
});

rapido10_2.addEventListener("click", () => {
  tl10_2.timeScale(5).restart();
});

lento10_2.addEventListener("click", () => {
  tl10_2.timeScale(0.1).restart();
});

normal10_2.addEventListener("click", () => {
  tl10_2.timeScale(1).restart();
});


const aula11 = document.querySelector(".aulas-11");
const Container11_1 = document.querySelector(".aulas-11-container-1");
const elemento11_1 = document.querySelector(".aulas-11 .elemento-1");
const elemento11_2 = document.querySelector(".aulas-11 .elemento-2");

gsap.registerPlugin(ScrollTrigger);

gsap.to( elemento11_1, {
  x: 500,
  duration: 3,
  scrollTrigger: elemento11_2, 
}); 


const aula12 = document.querySelector(".aulas-12");
const container12_1 = document.querySelector(".aulas-12-container");
const elemento12_1 = container12_1.querySelector(".elemento-1");


gsap.registerPlugin(ScrollTrigger);

gsap.to( elemento12_1, {
  x: '80vw',
  rotate: "3600deg",
  duration: 3,
  scrollTrigger: {
    trigger: elemento12_1,
    start: "top 90%",
    end: "bottom 10%",
    toggleClass: 'blue',
    scrub: true,
  }, 
});
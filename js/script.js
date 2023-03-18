const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const tMulai = document.querySelector(".mulai");
const score = document.querySelector(".score");
const pop = document.querySelector("#pop");
const jump = document.querySelector("#jump");
const inputWaktu = document.getElementById("waktu");
let waktu = inputWaktu.value;

inputWaktu.addEventListener("change", function () {
  waktu = inputWaktu.value;
  console.log("Nilai waktu diubah menjadi " + waktu + " detik.");
});

tMulai.addEventListener("click", () => {
  mulai(waktu * 1000);
});

let tanahSebelumnya;
let selesai;
let scoreMain;

const randomTanah = () => {
  const bRandom = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[bRandom];
  if (tRandom == tanahSebelumnya) {
    randomTanah();
  }

  tanahSebelumnya = tRandom;
  return tRandom;
  //   return tanahSebelumnya;
  // return tRandom;
};

function randomWaktu(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah();
  const wRandom = randomWaktu(700, 900);

  tRandom.classList.add("muncul");
  jump.play();

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (selesai === false) {
      munculkanTikus();
    }
  }, wRandom);
}

const mulai = (waktu) => {
  selesai = false;
  scoreMain = 0;
  score.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, waktu);
};

function pukul() {
  scoreMain = scoreMain + 1 * 10;
  score.textContent = "Score anda : " + scoreMain;
  this.parentNode.classList.remove("muncul");
  pop.play();
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});

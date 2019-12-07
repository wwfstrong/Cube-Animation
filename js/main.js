const box = document.querySelector("#box");
const rec = box.querySelectorAll("div");
const btn = document.querySelector("#change");
let time = true;
btn.onclick = () => {
  if (time) {
    box.classList.remove("ring");
    box.classList.add("cube");
    for (let i = 0; i < rec.length; i++) {
      i <= rec.length / 2 - 1
        ? rec[i].classList.add("outside")
        : rec[i].classList.add("inside");
    }
    time = false;
  } else {
    box.classList.remove("cube");
    box.classList.add("ring");
    for (let i = 0; i < rec.length; i++) {
      i <= rec.length / 2 - 1
        ? rec[i].classList.remove("outside")
        : rec[i].classList.remove("inside");
    }
    time = true;
  }
};

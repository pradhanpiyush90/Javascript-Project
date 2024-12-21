let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");

let slides = document.querySelectorAll(".slide");

slides.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
  item.style.transform = `translateX(0)%`;
});

let counter = 0;
next.addEventListener("click", () => {
  counter++;
  carousel();
});

prev.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  //   if (counter > slides.length - 1) {
  //     counter = 0;
  //   }

  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }

  if (counter < slides.length - 1) {
    next.style.display = "block";
  } else {
    next.style.display = "none";
  }

  if (counter > 0) {
    prev.style.display = "block";
  } else {
    prev.style.display = "none";
  }

  slides.forEach((item) => {
    item.style.transform = `translateX(-${counter * 100}%`;
  });
}

prev.style.display = "none";

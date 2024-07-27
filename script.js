// define variables
let slideNumContainer, next, prev, indecators, imgsArr, NumOfSlide;

slideNumContainer = document.querySelector("#slider-number");
next = document.querySelector("#next");
prev = document.querySelector("#prev");
indecators = document.querySelector("#indecators ul");
imgsArr = Array.from(document.querySelectorAll(".slider-container img"));
NumOfSlide = 1;

// genertae the bullets of navigation
for (let i = 1; i <= imgsArr.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-slide", i);
  indecators.appendChild(li);
}

// make next img active 
const nextImg = () => {
  NumOfSlide++;
  checker();
};
next.addEventListener("click", nextImg);

// make pervious img active
const prevImg = () => {
  NumOfSlide--;
  checker();
};
prev.addEventListener("click", prevImg);

// active bullet when click it
let lis = document.querySelectorAll("#indecators li");
lis.forEach((li) => {
  li.addEventListener("click", () => {
    NumOfSlide = parseInt(li.getAttribute("data-slide"));
    checker();
  });
});

// remove all active classes
const removeActive = () => {
  imgsArr.forEach((img) => {
    img.classList.remove("active");
  });
  lis.forEach((li) => {
    li.classList.remove("active");
  });
};

// check all functions work good
const checker = () => {
  slideNumContainer.textContent = `${NumOfSlide} of ${imgsArr.length}`;
  removeActive();
  imgsArr[NumOfSlide - 1].classList.add("active");
  indecators.children[NumOfSlide - 1].classList.add("active");

  if (NumOfSlide === 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (NumOfSlide === imgsArr.length) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
};
checker();

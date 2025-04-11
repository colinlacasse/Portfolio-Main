// template_0dgwapi
// service_ank9w5o
// CLh2dCXPnwLlTg0gb

function contact(event) {
  event.preventDefault();
  let loading = document.querySelector(".modal__overlay--loading");
  let success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_ank9w5o",
      "template_0dgwapi",
      event.target,
      "CLh2dCXPnwLlTg0gb"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      alert(
        "The email service is currently unavaiable, please contact me directly at colinjlacasse@gmail.com, thanks!"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
  isModalOpen = !isModalOpen;
  isModalOpen
    ? document.body.classList.add("modal__open")
    : document.body.classList.remove("modal__open");
}

let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  contrastToggle
    ? document.body.classList.add("dark__theme")
    : document.body.classList.remove("dark__theme");
}

let scaleFactor = 1 / 20;
function moveBackground(event) {
  let shapes = document.querySelectorAll(".shape");
  let x = event.clientX * scaleFactor;
  let y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    let isOdd = i % 2 === 0;
    let boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

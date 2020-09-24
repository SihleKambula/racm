// let splashElement = document.querySelector("#splash");
// let modal = document.querySelector(".modal-l");
// let modal2 = document.querySelector(".modal2");
// let trigger = document.querySelector(".trigger");
// let trigger2 = document.querySelector(".trigger2");
// let closeButton = document.querySelector(".close-button-l");
// let closeButton2 = document.querySelector(".close-button2");

function toggleMenu() {
  let navigation = document.querySelector(".navigation");
  let toggle = document.querySelector(".toggle");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");
}

gsap.registerPlugin(ScrollTrigger);
const timeLine = gsap.timeline({ defaults: { ease: "power1.out" } });
timeLine.to("#splash", { opacity: 0, zIndex: 0, duration: 2.5 });
timeLine.to(".text", { y: "0%", duration: 1, stagger: 1 });
timeLine.to(".navigation", { width: "60px", duration: 0.15 });
gsap.to(".portfolio", {
  scrollTrigger: {
    trigger: ".portfolio",
  },
  y: "0%",
  duration: 1,
});
gsap.to(".vids", {
  scrollTrigger: {
    trigger: ".vids",
  },
  opacity: 1,
  duration: 0.05,
  stagger: 1,
});
gsap.to(".about ", {
  scrollTrigger: {
    trigger: ".about",
    // toggleActions: "restart none none none",
  },
  y: "0%",
  duration: 1,
});
gsap.to(".about-image", {
  scrollTrigger: {
    trigger: ".about-image ",
  },
  x: "0%",
  duration: 1,
});
gsap.to(".about-para", {
  scrollTrigger: {
    trigger: ".about-para",
  },
  x: "0%",
  duration: 1,
});
gsap.to(".team-section", {
  scrollTrigger: {
    trigger: ".team-section",
  },
  y: "0%",
  duration: 1,
});
gsap.to(".contact", {
  scrollTrigger: {
    trigger: ".contact",
  },
  y: "0%",
  duration: 1,
});
gsap.to(".ad-box", {
  scrollTrigger: {
    trigger: ".ad-box",
    toggleActions: "restart none none none",
  },
  y: "0%",
  duration: 1,
  stagger: 0.25,
});

//          OLD CODE  //

//Splash code
// setTimeout(() => {
//   splashElement.classList.toggle("fade");
// }, 1000);

//    MODAL SECTION
// function toggleModal2() {
//   modal2.classList.toggle("show-modal");
// }
// function toggleModal() {
//   modal.classList.toggle("show-modal");
// }
// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal2();
//   }
// }

// trigger.addEventListener("click", toggleModal);
// trigger2.addEventListener("click", toggleModal2);
// closeButton.addEventListener("click", toggleModal);
// closeButton2.addEventListener("click", toggleModal2);
// window.addEventListener("click", windowOnClick);

//          ANIMATION WITH GSAP

//Youtube content
// fetch(
//   "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDikgdX8_yi7Wz3QUp_3dU7ov14yGSSMrU&channelId=UCfbCQZ2ALEfVCVyxF9OkUWQ&part=snippet,id&order=date&maxResults=10"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data.items));

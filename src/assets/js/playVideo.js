document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".video-section__btn");
  const background = document.querySelector(".video-section__bg");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const wrapper = btn.closest(".video-section__wrapper");
    videoPlay(wrapper);
  });

  function videoPlay(wrapper) {
    const iframe = document.querySelector(".video-section__video");
    const src = iframe.getAttribute("data-src");
    background.classList.add("video-section__bg_is-active");
    btn.classList.add("video-section__btn_is-active");
    iframe.setAttribute("src", src);
  }
});

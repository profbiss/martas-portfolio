document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".works-section__tab-btn");
  const tabs = document.querySelectorAll(".works-section__grid");
  const btnsWrap = document.querySelector(".works-section__tabs");

  btnsWrap.addEventListener("click", (e) => {
    if (e.target) {
      e.preventDefault();

      const target = e.target;

      tabBtns.forEach((item, index) => {
        if (item === target) {
          tabsSwitcher(tabBtns, tabs, index);
        }
      });
    }
  });

  function tabsSwitcher(btns, tabs, index = 0) {
    btns.forEach((item) =>
      item.classList.remove("works-section__tab-btn_is-active")
    );
    btns[index].classList.add("works-section__tab-btn_is-active");
    tabs.forEach((item) => {
      item.style.display = "none";
    });
    tabs[index].style.display = "grid";
  }

  tabsSwitcher(tabBtns, tabs);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".works-section__btn");
  const scetchContainer = document.querySelectorAll(".works-section__grid")[0];
  const madeContainer = document.querySelectorAll(".works-section__grid")[1];
  const scetchItems = scetchContainer.childNodes;
  const madeItems = madeContainer.childNodes;
  const btnsWrap = document.querySelector(".works-section__tabs");

  btnsWrap.addEventListener("click", () => {
      hideWorks(scetchItems);
      hideWorks(madeItems);
      btn.textContent = "Смотреть все";
    }
  );

  function hideWorks(list) {
    list.forEach((item, index) => {
      if (index > 8) {
        item.style.display = "none";
        item.classList.remove("visible-item");
        btn.textContent = "Смотреть все";
      }
    });
  }

  function showWorks(list) {
    list.forEach((item, index) => {
      if (index > 8) {
        item.style.display = "flex";
        item.classList.add("visible-item");
        btn.textContent = "Показать меньше";
      }
    });
  }

  hideWorks(scetchItems);
  hideWorks(madeItems);

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (scetchContainer.getAttribute("style") === "display: grid;") {
      if (
        Array.from(scetchItems).some((item) => {
          return item.classList.contains("visible-item");
        }) === false
      ) {
        showWorks(scetchItems);
      } else {
        hideWorks(scetchItems);
      }
    } else if (madeContainer.getAttribute("style") === "display: grid;") {
      if (
        Array.from(madeItems).some((item) => {
          return item.classList.contains("visible-item");
        }) === false
      ) {
        showWorks(madeItems);
      } else {
        hideWorks(madeItems);
      }
    }
  });
});

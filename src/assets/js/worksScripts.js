document.addEventListener("DOMContentLoaded", () => {
  const tabsButtonsContainer = document.body.querySelector(
    ".works-section__tabs"
  );
  const tabsButtons = document.body.querySelectorAll(".works-section__tab-btn");
  const worksAlbums = document.body.querySelectorAll(".works-section__grid");
  const seeAllButton = document.body.querySelector(".works-section__btn");

  tabsButtonsContainer.addEventListener("click", (e) => switchAlbumByClick(e));
  seeAllButton.addEventListener("click", (e) => showExcessWorks(e));

  function switchAlbumByClick(event) {
    if (event.target) {
      const target = event.target;

      event.preventDefault();

      return switchAlbum(target);
    }
  }

  function switchAlbum(target = tabsButtons[0]) {
    if (!target.classList.contains("works-section__tab-btn_is-active")) {
      tabsButtons.forEach((button, index) => {
        button.setAttribute("href", "#");
        button.classList.remove("works-section__tab-btn_is-active");
        if (button === target) {
          button.removeAttribute("href");
          button.classList.add("works-section__tab-btn_is-active");
          return showChosenAlbum(index);
        }
      });
    }
  }

  function showChosenAlbum(index = 0) {
    worksAlbums.forEach((album) => {
      album.style.display = "none";
    });
    return (worksAlbums[index].style.display = "grid");
  }

  switchAlbum();
});

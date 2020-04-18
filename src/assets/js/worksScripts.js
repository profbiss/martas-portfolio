document.addEventListener("DOMContentLoaded", () => {
  const tabsButtonsContainer = document.body.querySelector(
    ".works-section__tabs"
  );
  const tabsButtons = document.body.querySelectorAll(".works-section__tab-btn");
  const worksAlbums = document.body.querySelectorAll(".works-section__grid");
  const seeAllButton = document.body.querySelector(".works-section__btn");

  tabsButtonsContainer.addEventListener("click", tabsButtonsListener);
  seeAllButton.addEventListener("click", (e) => {
    e.preventDefault();
    const currentAlbum = Array.from(worksAlbums).find(
      (album) => album.getAttribute("style") === "display: grid;"
    );
    if (
      Array.from(currentAlbum.childNodes).some((item) => {
        return item.getAttribute("style") == "display: none;";
      })
    ) {
      seeAllButton.textContent = "Показать меньше";
      showExcessWorks(currentAlbum);
    } else {
      seeAllButton.textContent = "Смотреть все";
      hideExcessWorks(currentAlbum);
    }
  });

  function tabsButtonsListener(e) {
    if (e.target) {
      const target = e.target;

      e.preventDefault();

      if (target.hasAttribute("href")) {
        iterateElements(worksAlbums, hideExcessWorks);
        seeAllButton.textContent = "Смотреть все";
      }

      return switchButtons(showChosenAlbum, target);
    }
  }

  function switchButtons(cb = null, target = tabsButtons[0]) {
    if (!target.classList.contains("works-section__tab-btn_is-active")) {
      tabsButtons.forEach((button, index) => {
        button.setAttribute("href", "#");
        button.classList.remove("works-section__tab-btn_is-active");
        if (button === target) {
          button.removeAttribute("href");
          button.classList.add("works-section__tab-btn_is-active");
          return cb(index);
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

  function iterateElements(element, cb = null) {
    element.forEach((item, index) => {
      if (cb !== null) {
        cb(item);
      }
    });
  }

  function hideExcessWorks(album) {
    album.childNodes.forEach((work, index) => {
      if (index > 8) {
        work.style.display = "none";
      }
    });
  }

  function showExcessWorks(album) {
    album.childNodes.forEach((work, index) => {
      if (index > 8) {
        work.style.display = "block";
      }
    });
  }

  iterateElements(worksAlbums, hideExcessWorks);
  switchButtons(showChosenAlbum);
});

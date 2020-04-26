(function() {
  document.body.onload = () => {
    setTimeout(() => {
      const loader = document.querySelector(".preloader");
      if (!loader.classList.contains("preloader_done")) {
        loader.classList.add("preloader_done");
        return;
      }
    }, 1000);
  };
})();
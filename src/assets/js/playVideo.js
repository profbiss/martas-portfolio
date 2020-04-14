import $ from "jquery";

$(document).ready(function () {
  $(".video-section__btn").on("click", function (e) {
    e.preventDefault();
    const wrapper = $(this).closest(".video-section__wrapper");
    videoPlay(wrapper);
  });

  function videoPlay(wrapper) {
    const iframe = wrapper.find(".video-section__video");
    const src = iframe.data("src");
    $(".video-section__bg").addClass("video-section__bg_is-active");
    $(".video-section__btn").addClass("video-section__btn_is-active")
    iframe.attr("src", src);
  }
});

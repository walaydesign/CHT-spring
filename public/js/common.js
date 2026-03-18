$(".gotoelement").click(function () {
  let target = $(this).data("target");
  let headerHeight;
  if ($(window).width() > 768) {
    headerHeight = 107;
  } else {
    headerHeight = 60;
  }
  let top = $(target).offset().top - headerHeight;
  $("html, body").animate({ scrollTop: top }, 300);
});

$(".btn-join").click(function () {
  $(".lottery-wrapper.init").fadeOut(300);
  $(".lottery-wrapper.task").fadeIn(300);
});

$(".lottery-task__content .btn").click(function () {
  if (!$(this).hasClass("all")) {
    $(".lottery-wrapper.task").fadeOut(300);
    $(".lottery-wrapper.wrong").fadeIn(300);
  }
});

$(".btn-next").click(function () {
  $(".lottery-wrapper.wrong").fadeOut(300);
  $(".lottery-wrapper.task").fadeIn(300);
});

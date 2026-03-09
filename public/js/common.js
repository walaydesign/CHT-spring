$(".produce-sec_head").click(function () {
    $(this).find(".produce-sec_icon").toggleClass("active");
    $(this).parents(".produce-sec").find(".produce-sec_body").slideToggle(300);
});

$(".btn-play").click(function () {
    $(this).toggleClass("playing");
})
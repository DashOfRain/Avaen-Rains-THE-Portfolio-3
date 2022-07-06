$(".topbar-button-about").click(function() {
    $(".nav").removeClass("active");
    $(".main-content-home").fadeIn();
    $(".email-box").fadeOut();
    $(".previous-projects").fadeOut();
    $(".topbar-button-about").addClass("active");
});

$(".topbar-button-call").click(function() {
    $(".email-box").fadeIn();
    $(".main-content-home").fadeOut();
    $(".nav").removeClass("active");
    $(".topbar-button-call").addClass("active");
    $(".previous-projects").fadeOut();
});

$(".topbar-button-P_Work").click(function() {
    $(".email-box").fadeOut();
    $(".main-content-home").fadeOut();
    $(".nav").removeClass("active");
    $(".topbar-button-P_Work").addClass("active");
    $(".previous-projects").fadeIn();
});
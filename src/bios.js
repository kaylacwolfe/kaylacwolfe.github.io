$(document).ready(function(){
    $(".hbutton").click(() => {
        $(".about").load("bios.html #kayla");
    });
    $(".kabutton").click(() => {
        $(".about").load("bios.html #matt");
    });
    $(".mbutton").click(() => {
        $(".about").load("bios.html #jennah");
    });
    $(".jbutton").click(() => {
        $(".about").load("bios.html #kyler");
    });
    $(".kybutton").click(() => {
        $(".about").load("bios.html #ashley");
    });
    $(".abutton").click(() => {
        $(".about").load("bios.html #hannah");
    });
});
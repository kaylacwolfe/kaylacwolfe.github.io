$(document).ready(function(){
    $(".white").click(() => {
        $(".about").load("plantpot.html #product-white");
    });
    $(".black").click(() => {
        $("#image").load("plantpot.html #product-black");
    });
    $(".terracotta").click(() => {
        $("#image").load("plantpot.html #product-terr");
    });
});
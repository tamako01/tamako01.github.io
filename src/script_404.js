function showup(){
     $("#404_overlay").append('<img src="src/images/404.png" class="image wh-100" id="image404" alt=""/>');
};
function jump(){
    window.location.href="main.html";
    sessionStorage.removeItem("reloading");
};
function yeah(e) {
    if ($("#image404").get().length===0) {
        $("#404_overlay").append('<img src="src/images/404.png" class="image wh-100" id="image404" alt=""/>');
    }
    $("#image404").show();
    if ($("#image404").css("display")==="block") {
        window.setTimeout( jump, 1000 ); // 1 seconds
    }
}

$( document ).ready(function() {

    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        yeah();
    }
    sessionStorage.setItem("reloading", "true");
    window.setTimeout( showup, 1000 ); // 1 seconds

    $("body").click(yeah);

    window.setTimeout( yeah, 4000 ); // 4 seconds
});

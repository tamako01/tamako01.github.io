function showup(){
     $("#404_overlay").append('<img src="src/images/404.png" class="image wh-100" id="image404" alt=""/>');
};
function jump(){
    window.location.href="main.html";
    sessionStorage.removeItem("reloading");
};
function yeah(e) {
    $("#image404").show();
    if ($("#image404").css("display")==="block") {
        window.setTimeout( jump, 300 ); // 5 seconds
    }
}

$( document ).ready(function() {

    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        showup();
        yeah();
    }
    sessionStorage.setItem("reloading", "true");
    window.setTimeout( showup, 4000 ); // 4 seconds

    $("body").click(yeah);



});

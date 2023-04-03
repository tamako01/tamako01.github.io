function showup(){
     $("#404_overlay").append('<img src="src/images/404.png" class="image wh-100" id="image404" alt=""/>');
};
function yeah(e) {
    if ($("#image404").get().length===0) {
        $("#404_overlay").append('<img src="src/images/404.png" class="image wh-100" id="image404" alt=""/>');
    }
    $("#image404").show();
}

$( document ).ready(function() {
    $("body").click(function(e) {
        $("#music").get(0).play();
    });
    window.setTimeout( showup, 1000 ); // 1 seconds

    $("body").click(yeah);

    window.setTimeout( yeah, 4000 ); // 4 seconds
});

$( document ).ready(function() {
    $("#account").submit(function(e) {
        e.preventDefault();
       if ($("#account_name").val()==="rEigEn-1010ArAtAkA" && $("#password").val()==="05121010forever") {
            $("#account").hide();
            $("#blogs").show();
       }
    });
    $("#research").submit(function(e) {
        e.preventDefault();
        $("#secret").remove();
       if ($("#q1").val()==="1" && $("#q2").val()==="3" && $("#q3").val()==="2" && $("#q4").val()==="3" && $("#q5").val()==="3" && $("#q6").val().toLowerCase()==="home" && $("#q7").val()==="冥界" && $("#q8").val()==="节哀顺变") {
            $("#research").append('<p id="secret">name: rEigEn-1010ArAtAkA <br> pswd: 05121010forever</p>');
       }
    });
});
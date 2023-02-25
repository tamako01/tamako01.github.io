$( document ).ready(function() {
    $("#account").submit(function(e) {
        e.preventDefault();
       if ($("#account_name").val()==="123@com" && $("#password").val()==="123") {
            $("#account").hide();
            $("#blogs").show();
       }
    });
});
new WOW().init();

$(document).ready(function() {

    $("#cta-form").on("submit", function(e) {
        e.preventDefault();
        console.log("Sending CTA");

        // Ref: http://blog.danielw.co/Sending-Email-from-Github-Pages/
        $.ajax({
            url: atob("Ly9mb3Jtc3ByZWUuaW8vbmV2aWxsZUBkYXN0dXIubWUudWs="), //-"//formspree.io/neville@dastur.me.uk",
            type: "POST",
            data: $("#cta-form").serialize(),
            dataType: "json",
            success: function(json) {
                console.log("ok");
                ga('send', 'event', 'submit', 'click', 'cta');
                $("#email-cta-success").show();
                setTimeout(function(){
                    $("#email-cta-success").hide();
                },
                60000);
            },
            error: function(xhr, errmsg, err) {
                console.log("err: " + errmsg);
                ga('send', 'event', 'submit-fail', 'click', 'cta');
                $("#email-cta-fail").show();
                setTimeout(function(){
                    $("#email-cta-fail").hide();
                },
                10000);
            }
        });
    });
    
});


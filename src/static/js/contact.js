$(document).ready(function() {

    $("#contact_form").on("submit", function(e) {
        e.preventDefault();
        console.log("Sending Message");

        // Ref: http://blog.danielw.co/Sending-Email-from-Github-Pages/
        $.ajax({
            //- btoa("//formspree.io/enquiries@surreyvascularsurgeon.com")
            url: atob("Ly9mb3Jtc3ByZWUuaW8vZW5xdWlyaWVzQHN1cnJleXZhc2N1bGFyc3VyZ2Vvbi5jb20="),
            type: "POST",
            data: $("#contact_form").serialize(),
            dataType: "json",
            success: function(json) {
                console.log("ok");
                ga('send', 'event', 'submit', 'contact', '');
                $("#contact-success").show();
                setTimeout(function(){
                    $("#contact-success").hide();
                },
                60000);
            },
            error: function(xhr, errmsg, err) {
                console.log("err: " + errmsg);
                ga('send', 'event', 'submit-fail', 'contact', '');
                $("#contact-fail").show();
                setTimeout(function(){
                    $("#contact-fail").hide();
                },
                10000);
            }
        });
    });
    
});


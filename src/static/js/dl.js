$( document ).ready(function() {

  $('#inputEmailStatus').hide();

  $('#inputEmail').mailgun_validator({
   api_key: 'pubkey-bb80e276fcdcfecf3c1e62a5b7edfa29',
   //in_progress: in_progress_callback, // called when request is made to validator
   //- The API call is successful
   success: function(data){
      console.log(data);

      var suggestions = (data.did_you_mean) ? "<em>did you mean " + data.did_you_mean + "</em>" : "";

      if( data.is_valid ) {
        $('#inputEmailGroup').removeClass('has-error');
        $('#inputEmailGroup').addClass('has-success');
        if(suggestions.length>0) {
          $('#inputEmailStatus').html("Email valid but, " + suggestions);          
          $('#inputEmailStatus').show();
        }
        else {
          $('#inputEmailStatus').html("");          
          $('#inputEmailStatus').hide();          
        }
      }
      else {
        $('#inputEmailGroup').removeClass('has-success');
        $('#inputEmailGroup').addClass('has-error');

        var invalid_status = "The email address is invalid.";
        if (suggestions.length>0) {
          invalid_status += "\n" + suggestions;
        }

        $('#inputEmailStatus').html(invalid_status);
        $('#inputEmailStatus').show();
      }

    },         // called when validator has returned
   //- There was an error in calling the API
   error: function(data){
      $('#inputEmailGroup').addClass('has-error');
      $('#inputEmailStatus').html("A valid email is required.");
      $('#inputEmailStatus').show();
    },
  });

  $('#cta_dl').submit(function(e) {
    e.preventDefault();

    if( $('#inputEmail').val() == "" || $('#inputEmail').attr('placeholder')) {
      $('#inputEmailGroup').addClass('has-error');
      $('#inputEmailStatus').html("A valid email is required.");
      $('#inputEmailStatus').show();
      return false;
    } 

    $("#cta_dl_send").button('loading');

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(
      function() {
        ga('send', 'event', 'CTASpa', 'form', 'Spa');
        goog_report_conversion('https://www.surreyvascularsurgeon.com/dl');
        alert("Thank you!");
      });

    return false;
  });

}); //- end of document ready

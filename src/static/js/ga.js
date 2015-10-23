(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-38705943-3', 'auto');
ga('send', 'pageview');


//- Function that tracks a click on an outbound link in Google Analytics.
//- This function takes a valid URL string as an argument, and uses that URL string
//- as the event label.
var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
     function () {
     document.location = url;
     }
   });
}

//- You'll also need to add (or modify) the onclick attribute to your links. Use this example as a model for your own links:
//- <a href="http://www.example.com" onclick="trackOutboundLink('http://www.example.com'); return false;">Check out example.com</a>
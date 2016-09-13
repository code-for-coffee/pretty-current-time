setInterval(function(event) {
  var currentTime = new Date();
  var time = "am";
    hour = currentTime.getHours();
    if (hour >=13) {
      time = "pm";
      hour = hour - 12;
    }
    min  = currentTime.getMinutes();
    sec  = currentTime.getSeconds();
    if (sec < 10) sec = "0" + sec;
    // modify the dom as needed
    //timeHolder.html("Hey! Listen! It is currently " + hour + ":" + min + ":" + sec + time +  ".");

}, 10);

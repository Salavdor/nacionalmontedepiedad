$(document).on("click", "#play", function(){  
    $("#frame")[0].contentWindow.postMessage("{\"event\":\"command\",\"func\":\"playVideo\",\"args\":\"\"}", "*");
  });
  
  $(document).on("click", "#pause", function(){
    $("#frame")[0].contentWindow.postMessage("{\"event\":\"command\",\"func\":\"pauseVideo\",\"args\":\"\"}", "*");
  });
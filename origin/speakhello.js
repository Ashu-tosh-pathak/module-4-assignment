(function(window){
  var speakword= "hello";
  var hellospeaker= function(name){
    console.log(speakword+" "+name);
    
  }
  window.hellospeaker= hellospeaker; 
})(window);

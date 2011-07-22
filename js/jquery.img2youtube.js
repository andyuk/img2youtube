
// Please note: You must run this on a web server to work. Running it from the local file system will not work.
var onYouTubePlayerReady = function (playerId) {
  
  var ytplayer = document.getElementById(playerId);
  ytplayer.playVideo();
};

(function( $ ){

  $.fn.img2youtube = function(options) {  

    var settings = {
      'method' : 'iframe',
      'autoplay' : true
    };

    $.extend( settings, options );
    if (! settings.autoplay) {
      onYouTubePlayerReady = null;
    }
    
    var replaceWithIframe = function(element, width, height, youtube_id) {
      
      var html = $( '<iframe width="'+ width +'" height="'+ height +'" src="http://www.youtube.com/embed/'+ youtube_id +'" frameborder="0" allowfullscreen></iframe>');
      
      $(element)
        .after(html)
        .remove();
    } 

    var replaceWithFlash = function(element, width, height, youtube_id) {
      
        var id = "video_" + youtube_id;
        var html = $( '<div id="'+ id +'" />');
      
        $(element)
          .after(html)
          .remove();
      
        var params = { allowScriptAccess: "always", allowFullScreen: "true" };
        var atts = { id: id };
        swfobject.embedSWF('http://www.youtube.com/v/' + youtube_id +'?version=3&enablejsapi=1&feature=player_embedded&playerapiid=' + id,
                           id, width, height, "8", null, null, params, atts);
    }

    return this.each(function() {        

      $(this).click(function(event) {
        
        event.preventDefault();
  
        var youtube_url = $(this).attr('href');
        if (youtube_url === undefined) {
          console.log('Error: Invalid YouTube video link. Link should be in the format: http://youtu.be/vdQj2ohqCBk');
          return;
        }
        
        var youtube_id = youtube_url.substr(youtube_url.lastIndexOf('/')+1, youtube_url.length);
        
        var img = $(this).find('img:first');
        var width = $(img).attr('width');
        var height = $(img).attr('height');
        
        if (typeof(swfobject) !== "undefined" && swfobject.hasFlashPlayerVersion("8") && settings.method == 'swfobject') {

          replaceWithFlash(this, width, height, youtube_id);
        
        } else {
          
          replaceWithIframe(this, width, height, youtube_id);
        }
      });
      
    });

  };
})( jQuery );
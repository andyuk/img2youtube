//Load player api asynchronously.
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// jQuery img2youtube plugin.
(function($){

  $.fn.img2youtube = function(options){
  
    var settings = {
      'autoplay': true
    };
    $.extend(settings, options);
    
    var replaceWithVideo = function (event, element_id) {
      
      event.preventDefault();
      
      var self = event.currentTarget;
      
      var youtube_url = $(self).attr('href');
      if (youtube_url === undefined) {
        console.log('Error: Invalid YouTube video link. Link should be in the format: http://youtu.be/CODE-HERE');
        return;
      }
      
      var videoId = youtube_url.substr(youtube_url.lastIndexOf('/') + 1, youtube_url.length);
      var img = $(self).find('img:first');
      var width = $(img).attr('width');
      var height = $(img).attr('height');
  
      var html = '<div id="' + element_id + '"></div>';
      
      $(self)
        .after(html)
        .remove();

      new YT.Player(element_id, {
        height: height,
        width: width,
        videoId: videoId,
        events: {
          'onReady': function(evt){
            if (settings.autoplay) {
              evt.target.playVideo();  
            }
          }
        }
      });
    }
    
    var i = 0;
    return this.each(function(){
    
      $(this).click(function(event) {
        
      	replaceWithVideo(event, 'video_' + i);
        i++;
      });
    });
    
  };
})(jQuery);


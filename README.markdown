# img2youtube

Get full control over the first image on the video.

This jQuery plugin turns an image into a YouTube video when you click on it. It uses the YouTube <iframe> Player API.

Features:
- Progressive enhancement. If JavaScript isn't enabled the image will link to the YouTube page.
- YouTube iFrame works with HTML5 and flash.
- Auto-play video on click

Known issues:
- Google API is currently an experimental feature, which means that it might change unexpectedly.
- A JavaScript warning error is logged to the console. This does not affect any functionality.
The error is: "Unsafe JavaScript attempt to access frame with URL [url] from frame with URL [url]. Domains, protocols and ports must match."

You can read the YouTube <iframe> Player API reference here:
http://code.google.com/apis/youtube/iframe_api_reference.html

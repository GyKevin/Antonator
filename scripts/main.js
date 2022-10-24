//image link
var img ="https://drive.google.com/uc?id=1fp-JrejEDJFnQAKLsvXWAInA5IAzUV0I";

//replace images with anton
chrome.storage.sync.get({
    enabled: true,
}, function(items) {
    if(items.enabled) {
        setInterval(() => {
        var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].src = img;
        }
    }, 1000); //set interval
}}); //function
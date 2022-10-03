var url = "https://drive.google.com/uc?id=1fp-JrejEDJFnQAKLsvXWAInA5IAzUV0I";

// Replace google images with the image from the url
chrome.storage.sync.get({
enabled: true,
}, function(items) {
    if (items.enabled) {
        setInterval(() => {
        var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
        images[i].src = url;
            } 
        }, 1000);  
}});
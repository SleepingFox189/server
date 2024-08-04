javascript:(function(){
    var url = prompt("Enter the URL you want to visit:");
    if (url) {
        window.open("http://localhost:3000/?url=" + encodeURIComponent(url), '_blank');
    }
})();

$(function(){
    var counter = 20;
    var scroll = setInterval(function () {
        var loadingPoints = document.getElementsByClassName("loadingPointCheck");
        if (loadingPoints.length > 0) {
            var loadingPointStateElements = document.getElementsByClassName("lazy-loading-point");
            if (loadingPointStateElements.length > 0) {
                var styles = window.getComputedStyle(loadingPointStateElements[0]);
                var display = styles.getPropertyValue('display');
                if (display != 'none') {
                    loadingPoints[0].scrollIntoView();
                }    
            }
        }
        counter--;
        if (counter <= 0) {
            clearInterval(scroll);
        }
    }, 1000);
})
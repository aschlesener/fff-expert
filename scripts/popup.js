let addToCart = document.getElementById('addToCart');
let emptyCart =  document.getElementById('emptyCart');
let scroll = document.getElementById('scroll');

addToCart.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript({
            file: 'scripts/add_cart.js'
        })
    });
};

emptyCart.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript({
            file: 'scripts/remove_cart.js'
        })
    });
};

scroll.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript({
            file: 'scripts/scroll.js'
        })
    });
};

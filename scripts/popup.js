let addToCart = document.getElementById('addToCart');
let emptyCart =  document.getElementById('emptyCart');

addToCart.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript({
            file: 'scripts/run_add_cart.js'
        })
    });
};

emptyCart.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript({
            file: 'scripts/run_remove_cart.js'
        })
    });
};

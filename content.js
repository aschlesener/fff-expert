
function addLowStockItems() {
    var cartProductIds = getCartProductIds();

    // find all products with a low quantity notification
    $("#instock").find(".notify-left-quantity").each(function(i){

        // make sure the notification is displayed
        if ($(this).children().first().css('display') == 'block'){

            // find the add-to-box button for each product with a low quantity
            var cartButton = ($(this).parent().parent().children(".product_button").first().find("button").first());
            
            // ensure product is not already in cart before adding
            var itemId = $(cartButton).attr('data-id');
            if (cartProductIds.indexOf(itemId) == -1) {
                cartButton.click();        
            }
        }
    });
}

// helper function to find the IDs of products already in the cart, so we can avoid re-adding them
function getCartProductIds() {
    var cartProductIds = []
    $("#add-ons-cart-list").children().each(function() {
        var cls = $(this).attr('class');
        if (cls != undefined) {
            var classParts = $(this).attr('class').split('-');
            var cartItemId = classParts.pop();
            cartProductIds.push(cartItemId);
        }
    }); 

    return cartProductIds;
}

function removeItemsFromCart() {
    $("#add-ons-cart-list").children().each(function() {
        $(this).find(".tw-remove").first().children().first().click();
    });
}

addLowStockItems();
//removeItemsFromCart();
function removeItemsFromCart() {
    $("#add-ons-cart-list").children().each(function() {
        $(this).find(".tw-remove").first().children().first().click();
    });
}

removeItemsFromCart();

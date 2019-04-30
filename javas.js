var minusBtn = $(".minus-btn");
var plusBtn = $(".plus-btn");
var quantityElem = $(".quantity");
var favoriteBtns = $(".favorite-btn");
var deleteBtns = $(".delete-btn");
var addBtn = $(".add_item");

var totalsValue = $(".sub-total");
var taxRate = 0.05;
var shippingRate = 15.00;

favoriteBtns.on("click", colorChange);
deleteBtns.on("click", deleteItem);
minusBtn.on("click", minus);
plusBtn.on("click", plus);
addBtn.on("click", add);



/*function new_item(){
  return `<div class="item">
    <div class="item-image">
      <img src="./images/item2.jpg" height="100%" width="100%" alt=""/>
    </div>
    <div class="description">
      <span>Puma</span>
      <span>Black</span>
      <span>Shoes</span>
    </div>
    <div class="quantity-container">
      <button class="plus-btn" type="button" name="button">
        +</button>
      <input type="text" class="quantity" name="name" value="1" readonly>
      <button class="minus-btn" type="button" name="button">
        -</button>
    </div>
    <div class="price">Rs. 200</div>
    <div class="buttons">
      <span class="delete-btn"><button>&#10006;</button></span>
      <span class="favorite-btn"><button>&#10084;</button></span>
    </div>
  </div>`
}*/
function add(e){
  e.preventDefault();
  var productAdded = $('<div class="item"><div class="item-image"><img src="./images/item2.jpg" height="100%" width="100%" alt=""/></div><div class="description"><span>Shoes</span></div><div class="quantity-container"><button class="plus-btn" type="button" name="button">+</button><input type="text" class="quantity" name="name" value="1" readonly><button class="minus-btn" type="button" name="button">-</button></div><div class="price">Rs. 200</div><div  class="buttons"><span class="delete-btn"><button>&#10006;</button></span><span class="favorite-btn"><button>&#10084;</button></span></div></div>')
   productAdded.appendTo($('.items'));
   //console.log(productAdded);
}

/*function calculateCart() {
   var subTotal = 0;
   $('.item').each(function () {
     subTotal += parseInt($(this).children('.price').text());
   });
   var tax = subTotal*taxRate;
   var shipping = (subTotal > 0 ? shippingRate : 0);
  var total = subTotal + tax + shipping;

  /* Update totals display */
  /*$('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subTotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}

}

function updateQuantity(){

}
*/
function colorChange() {
  var favoriteBtn = $(this).parents('.item').find(".favorite-btn");
  favoriteBtn.find('button').css('color', 'red');
}

function deleteItem() {
  $(this).parents('.item').remove();
}

function getQuantity(t) {
  var quantityElem = $(t).parents('.item').find(".quantity");
  return parseInt(quantityElem.val());

}
function setQuantity(t, quantity) {
  var quantityElem = $(t).parents('.item').find(".quantity");
  quantityElem.val(quantity);
}

function plus() {
  var quantity = getQuantity(this);
  setQuantity(this, quantity + 1);
}

function minus() {
  var quantity = getQuantity(this);
  if (quantity === 0) return;
  setQuantity(this, quantity - 1);
}

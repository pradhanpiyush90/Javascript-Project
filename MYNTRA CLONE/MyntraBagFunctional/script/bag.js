const Convenience_Fee = 99;
let bagItemObjects;
onLoad()

function onLoad() {
    loadBagItemObjects()
    displayBagItems()
    displayBagSummary()
}

function loadBagItemObjects() {
    bagItemObjects = bagitems.map(item => {
        for (let i = 0; i < items.length; i++) {
            if (item == items[i].id) {
                return items[i]
            }
        }
    })
}

function removeFromBag(itemId){
bagitems = bagitems.filter(bagitem => bagitem !== itemId)
localStorage.setItem('bagitem', JSON.stringify(bagitems))
loadBagItemObjects() 
displayBagIcon()
displayBagItems()
displayBagSummary()
}

function displayBagSummary(){
    let bagcontainer = document.querySelector(".bag-summary")
   
    let itemcount = bagitems.length;
    let originalprice = 0;
    let discountprice = 0;
    bagItemObjects.forEach(bagitem => {
        originalprice += bagitem.original_price;
        discountprice += bagitem.original_price - bagitem.current_price
    });
   

    let totalamount = originalprice - discountprice;

    bagcontainer.innerHTML = `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${itemcount}) </div>
    <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹ ${originalprice}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹ ${discountprice}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹ ${Convenience_Fee}</span>
    </div>
    <hr>
    <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹ ${totalamount}</span>
    </div>
</div>
<button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
</button>`
}

function displayBagItems() {
    let containerElements = document.querySelector(".bag-items-container")

    newHtml = '';
    bagItemObjects.forEach(item => {
        newHtml += generateElement(item)
    });

    containerElements.innerHTML = newHtml;
}

function generateElement(item) {
    return `<div class="bag-item-container">
<div class="item-left-part">
    <img class="bag-item-img" src="/MyntraBagFunctional/${item.image}">
</div>
<div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date} oct</span>
    </div>
</div>

<div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
</div>`
}
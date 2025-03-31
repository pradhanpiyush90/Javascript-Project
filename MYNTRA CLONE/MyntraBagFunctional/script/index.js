let bagitems;
onLoad()

function onLoad() {
    let bagItemStr = localStorage.getItem('bagitem')
    bagitems = bagItemStr ? JSON.parse(bagItemStr) : []
    displayItemOnHomePage()
    displayBagIcon()
}


function addToBag(itemId) {
    bagitems.push(itemId)
    localStorage.setItem('bagitem', JSON.stringify(bagitems))
    displayBagIcon()
}

function displayBagIcon() {
    let bagitemcount = document.querySelector(".bag-item-count")
    if (bagitems.length > 0) {
        bagitemcount.style.visibility = 'visible'
        bagitemcount.innerHTML = bagitems.length
    }
    else {
        bagitemcount.style.visibility = 'hidden'
    }
}



function displayItemOnHomePage() {

    let itemscontainer = document.querySelector(".items-container")
    if (!itemscontainer) {
        return
    }
    let newHtml = '';
    items.forEach(item => {
        newHtml += ` 
    <div class="item-container">
<img class="item-image" src="${item.image}" alt="image">

<div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
</div>
<div class="company-name">${item.company}</div>

<div class="item-name">${item.item_name}</div>

<div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount"> (${item.discount_percentage}% OFF)</span>  
</div>

<button onclick="addToBag(${item.id})" class="add-bag-btn">Add To Bag</button>
</div>`
    })

    itemscontainer.innerHTML = newHtml
}
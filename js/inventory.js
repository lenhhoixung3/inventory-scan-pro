let products = []

function addProduct(barcode){

let found = products.find(p => p.barcode === barcode)

if(found){

found.qty++

}else{

products.push({

barcode: barcode,
name: "Unknown product",
qty: 1

})

}

renderInventory()
updateDashboard()

}

function renderInventory(){

const list = document.getElementById("inventoryList")

list.innerHTML = ""

products.forEach(p => {

const div = document.createElement("div")

div.className = "product"

div.innerHTML = `
<b>${p.name}</b><br>
Barcode: ${p.barcode}<br>
Qty: ${p.qty}
`

list.appendChild(div)

})

}

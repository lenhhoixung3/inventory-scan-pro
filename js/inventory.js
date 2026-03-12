let products=[]

function addProduct(barcode){

let found=products.find(p=>p.barcode===barcode)

if(found){

found.qty++

}else{

products.push({

barcode:barcode,
name:"Unknown Product",
qty:1

})

}

renderInventory()
updateDashboard()

}

function renderInventory(){

const list=document.getElementById("inventoryList")

list.innerHTML=""

products.forEach(p=>{

const div=document.createElement("div")

div.className="product"

div.innerHTML=`

${p.name}<br>
Barcode: ${p.barcode}<br>
Qty: ${p.qty}

`

list.appendChild(div)

})

}
function searchProduct(barcode){

let found = products.find(p => p.barcode === barcode)

if(found){

alert("Product: "+found.name)

}else{

addProduct(barcode)

}

}
async function lookupAI(barcode){

const res = await fetch(
"https://world.openfoodfacts.org/api/v0/product/"+barcode+".json"
)

const data = await res.json()

if(data.product){

return data.product.product_name

}

}
async function addProduct(barcode){

let name = await lookupAI(barcode)

products.push({

barcode: barcode,
name: name || "Unknown product",
qty: 1

})

renderInventory()

}

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

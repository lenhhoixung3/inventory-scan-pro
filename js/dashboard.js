function updateDashboard(){

let total = products.length

let low = products.filter(p=>p.qty<5).length

document.getElementById("totalProducts").innerText = total
document.getElementById("lowStock").innerText = low

}

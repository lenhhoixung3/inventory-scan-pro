function updateDashboard(){

document.getElementById("totalProducts").innerText=products.length

let low=products.filter(p=>p.qty<=5)

document.getElementById("lowStock").innerText=low.length

}

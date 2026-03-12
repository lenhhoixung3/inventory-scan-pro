let html5QrCode

function startScanner(){

html5QrCode = new Html5Qrcode("reader")

html5QrCode.start(
{ facingMode: "environment" },
{
fps: 30,
qrbox: { width: 250, height: 150 }
},
onScanSuccess
)

}

function onScanSuccess(barcode){

document.getElementById("scanResult").innerHTML =
"<div class='scan-box'>Barcode: "+barcode+"</div>"

addProduct(barcode)

}

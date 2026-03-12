let html5QrCode

function startScanner(){

html5QrCode=new Html5Qrcode("reader")

html5QrCode.start(
{ facingMode:"environment" },
{
fps:10,
qrbox:250
},
onScanSuccess
)

}

function onScanSuccess(barcode){

document.getElementById("scanResult").innerText="Scanned: "+barcode

addProduct(barcode)

}

startScanner()

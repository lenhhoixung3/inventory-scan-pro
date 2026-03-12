let scanner

function startScanner(){

scanner = new Html5Qrcode("reader")

scanner.start(
{ facingMode: "environment" },
{
fps: 30,
qrbox: { width: 280, height: 180 }
},
onScanSuccess
)

}

function onScanSuccess(barcode){

document.getElementById("scanResult").innerHTML=

`
<div class="scan-box">
Barcode: ${barcode}
</div>
`

searchProduct(barcode)

}

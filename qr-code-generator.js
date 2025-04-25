// qr-code.js

// This code generates a scannable QR code embedded with event with the eventName in the url. 
// To run node.js must be installed
// Use the command 'node ./path/to/script.js"

// Module
const QRCode = require("qrcode")

// QR options
var options = {
  errorCorrectionLevel: "M",
  scale: "10",
  type: "image/png",
}

// Webpage
const webPage = "https://44.217.13.231/"  // aws eip


// List of event names
const event_list = ["Luncheon", "Conference", "CS Class" ] 

for (var i =0; i < event_list.length; i++)
{
  // Event parameter data
  const eventKey = "eventName"
  const eventValue = event_list[i]

  // File path
  const filePath = `./qr-codes/qr-code-${eventValue}.png`

  // Combined url
  const url = `${webPage}?${eventKey}=${eventValue}`

  // Save QRCode as a file
  QRCode.toFile(filePath, url, options, function (err) {
    if (err) throw err
    console.log("QRCode generated.")
  })
}
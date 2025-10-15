import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'

function QRScanner() {
  const [data, setData] = useState('No QR code scanned yet')

  const handleScan = (result) => {
    if (result) {
      setData(result.text)
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>QR Scanner</h2>
      <div style={{ width: '300px', margin: 'auto' }}>
        <QrReader
          delay={300}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
        />
      </div>
      <p>Scanned Result: {data}</p>
    </div>
  )
}

export default QRScanner
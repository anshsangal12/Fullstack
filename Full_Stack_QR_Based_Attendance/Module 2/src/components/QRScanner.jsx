import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
import { useNavigate } from 'react-router-dom'

function QRScanner() {
  const [data, setData] = useState('No QR code scanned yet')
  const [scanned, setScanned] = useState(false)
  const navigate = useNavigate()

  const handleScan = (result) => {
    if (result) {
      const text = result.text
      setData(text)
      setScanned(true)
      // simulate marking attendance and navigate to status page with state
      setTimeout(() => {
        navigate('/attendance-status', { state: { qr: text, status: 'present', time: new Date().toISOString() } })
      }, 700)
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">QR Scanner</h2>
      <div className="mx-auto w-full max-w-sm bg-white p-4 rounded shadow">
        <QrReader
          delay={300}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
        />
        <p className="mt-4">Scanned Result: <span className="font-mono">{data}</span></p>
        {scanned && <p className="text-green-600 font-medium mt-2">Attendance being marked...</p>}
      </div>
    </div>
  )
}

export default QRScanner
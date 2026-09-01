import { useCallback, useEffect, useState } from 'react'
import Landing from './components/Landing.jsx'
import UploadZone from './components/UploadZone.jsx'
import FileCard from './components/FileCard.jsx'
import { fetchFiles, uploadFile } from './api.js'
import { formatBytes } from './utils.js'

export default function App() {
  const [page, setPage] = useState('landing')
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('')
  const [uploading, setUploading] = useState(false)

  // Ganti tema body sesuai layar (landing = krem, drive = lime)
  useEffect(() => {
    document.body.classList.toggle('landing-body', page === 'landing')
  }, [page])

  const load = useCallback(async () => {
    try {
      const data = await fetchFiles()
      setFiles(Array.isArray(data) ? data : [])
    } catch {
      setStatus('Backend belum nyala / tidak terjangkau di port 3000')
    }
  }, [])

  useEffect(() => {
    if (page === 'drive') load()
  }, [page, load])

  const handleUpload = async (file) => {
    setUploading(true)
    setStatus(`Mengupload ${file.name}...`)
    try {
      await uploadFile(file)
      setStatus(`${file.name} berhasil masuk Drive! Cek Telegram kamu.`)
      await load()
    } catch (err) {
      setStatus(`Gagal upload: ${err.message}`)
    } finally {
      setUploading(false)
    }
  }

  const totalSize = files.reduce((acc, f) => acc + (f.size || 0), 0)

  // LAYAR 1: Landing page dulu
  if (page === 'landing') {
    return <Landing onEnter={() => setPage('drive')} />
  }

  // LAYAR 2: Drive app
  return (
    <div className="phone">
      <span className="doodle" style={{ top: 8, left: 8 }} aria-hidden>✦</span>
      <span className="doodle" style={{ top: 14, right: 10 }} aria-hidden>♥</span>

      <header className="header">
        <h1>
          Hijau Drive <span className="badge">✓</span>
        </h1>
        <p>personal cloud • powered by Telegram</p>
      </header>

      <section className="stats">
        <div className="stat">
          <b>{files.length}</b>
          <span>Files</span>
        </div>
        <div className="stat">
          <b>{formatBytes(totalSize)}</b>
          <span>Total Size</span>
        </div>
        <div className="stat">
          <b>∞</b>
          <span>Storage</span>
        </div>
      </section>

      <UploadZone onFile={handleUpload} uploading={uploading} status={status} />

      <h2 className="section-title">
        <span className="active">My Files</span>
        <span className="inactive">Activity</span>
      </h2>

      <section className="file-list">
        {files.length === 0 ? (
          <div className="empty">Belum ada file. Drop file pertamamu di atas!</div>
        ) : (
          [...files].reverse().map((f) => <FileCard key={f.id} file={f} />)
        )}
      </section>

      <span className="doodle" style={{ bottom: 10, left: 16 }} aria-hidden>✳</span>
      <span className="doodle" style={{ bottom: 6, right: 14 }} aria-hidden>✦</span>
    </div>
  )
}
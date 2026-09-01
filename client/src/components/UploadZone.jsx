import { useRef, useState } from 'react'

export default function UploadZone({ onFile, uploading, status }) {
  const inputRef = useRef(null)
  const [drag, setDrag] = useState(false)

  const pick = (fileList) => {
    if (fileList && fileList.length) onFile(fileList[0])
  }

  return (
    <section
      className={`card upload-card ${drag ? 'dragover' : ''}`}
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => {
        e.preventDefault()
        setDrag(true)
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDrag(false)
        pick(e.dataTransfer.files)
      }}
    >
      <div className="upload-art">📦</div>
      <h2>Drop file di sini</h2>
      <p>atau tap untuk pilih file dari HP / laptop kamu</p>

      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(e) => {
          pick(e.target.files)
          e.target.value = ''
        }}
      />

      <button
        className="btn"
        disabled={uploading}
        onClick={(e) => {
          e.stopPropagation()
          inputRef.current.click()
        }}
      >
        {uploading ? 'Mengupload...' : 'Start Upload!'}
      </button>

      {status && <p className="status">{status}</p>}
    </section>
  )
}
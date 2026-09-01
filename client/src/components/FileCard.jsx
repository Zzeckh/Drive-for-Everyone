import { emojiFor, formatBytes } from '../utils.js'

export default function FileCard({ file }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(file.id)
      alert('ID file tercopy! Bekal buat direct link di Tahap 4.')
    } catch {
      prompt('Copy ID manual:', file.id)
    }
  }

  return (
    <article className="card file-card">
      <div className="file-thumb">{emojiFor(file.filename)}</div>
      <div className="file-meta">
        <h3>{file.filename}</h3>
        <p>
          {formatBytes(file.size)} • {new Date(file.uploadedAt).toLocaleString()}
        </p>
      </div>
      <button className="btn small" onClick={copy}>
        Copy ID
      </button>
    </article>
  )
}
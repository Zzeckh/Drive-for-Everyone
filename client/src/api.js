const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function fetchFiles() {
  const res = await fetch(`${API_BASE}/files`)
  if (!res.ok) throw new Error('Gagal memuat daftar file')
  return res.json()
}

export async function uploadFile(file) {
  const form = new FormData()
  form.append('file', file)
  const res = await fetch(`${API_BASE}/upload`, { method: 'POST', body: form })
  const data = await res.json()
  if (!res.ok || !data.success) throw new Error(data.error || 'Gagal upload')
  return data.file
}
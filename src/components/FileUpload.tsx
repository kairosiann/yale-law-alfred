'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUploading(true)
    setError(null)

    if (files.length === 0) {
      setError("Please select at least one file.")
      setIsUploading(false)
      return
    }

    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      console.log(data.message) // Log the success message

      router.push('/sections')
    } catch (err) {
      setError('An error occurred while uploading the files. Please try again.')
      console.error('Upload error:', err)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="files">
          Upload Files
        </label>
        <input
          type="file"
          id="files"
          multiple
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled={isUploading}
        />
      </div>
      {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isUploading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
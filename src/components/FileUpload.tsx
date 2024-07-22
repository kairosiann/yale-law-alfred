'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()
	const formData = new FormData()
	files.forEach((file) => formData.append('files', file))
  
	const response = await fetch('/api/upload', {
	  method: 'POST',
	  body: formData,
	})
  
	if (response.ok) {
	  router.push('/sections')
	} else {
	  // Handle error
	  console.error('Upload failed')
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
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
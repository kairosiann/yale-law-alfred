'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SectionSelector() {
  const [selectedSection, setSelectedSection] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()
	if (selectedSection) {
	  router.push('/fellowship-category')
	}
  }

  return (
    <form onSubmit={handleSubmit}>
      {['DecisionTree Variable1', 'DecisionTree Variable2', 'DecisionTree Variable3', 'DecisionTree Variable4', 'DecisionTree Variable5'].map((variable) => (
        <div key={variable} className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="section"
              value={variable}
              checked={selectedSection === variable}
              onChange={(e) => setSelectedSection(e.target.value)}
            />
            <span className="ml-2">{variable}</span>
          </label>
        </div>
      ))}
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
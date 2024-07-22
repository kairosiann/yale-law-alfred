'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FellowshipCategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedCategory) {
      router.push('/fellowship')
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
              name="category"
              value={variable}
              checked={selectedCategory === variable}
              onChange={(e) => setSelectedCategory(e.target.value)}
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
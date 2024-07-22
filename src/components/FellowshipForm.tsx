'use client'

import { useState } from 'react'

interface FormData {
  paid: string
  funds: string
  grantSource: string
  education: string
}

export default function FellowshipForm() {
  const [formData, setFormData] = useState<FormData>({
    paid: '',
    funds: '',
    grantSource: '',
    education: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
  }

  return (
	<form onSubmit={handleSubmit}>
	  <div className="mb-4">
		<p className="font-bold mb-2">1. Will the fellowship be paid or unpaid?</p>
		<label className="inline-flex items-center mr-4">
		  <input type="radio" name="paid" value="Paid" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Paid</span>
		</label>
		<label className="inline-flex items-center">
		  <input type="radio" name="paid" value="Unpaid" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Unpaid</span>
		</label>
	  </div>
	  <div className="mb-4">
		<p className="font-bold mb-2">2. From which funds will the Fellow be paid?</p>
		<label className="inline-flex items-center mr-4">
		  <input type="radio" name="funds" value="GA" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">GA</span>
		</label>
		<label className="inline-flex items-center">
		  <input type="radio" name="funds" value="Grants" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Grants</span>
		</label>
	  </div>
	  <div className="mb-4">
		<p className="font-bold mb-2">3. Are the grant funds paid directly by an external agency or through Yale?</p>
		<label className="inline-flex items-center mr-4">
		  <input type="radio" name="grantSource" value="External Agency" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">External Agency</span>
		</label>
		<label className="inline-flex items-center">
		  <input type="radio" name="grantSource" value="Yale" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Yale</span>
		</label>
	  </div>
	  <div className="mb-4">
		<p className="font-bold mb-2">4. What is the requisite educational qualification for the Fellowship?</p>
		<label className="inline-flex items-center mr-4">
		  <input type="radio" name="education" value="Doctoral Degree" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Doctoral Degree</span>
		</label>
		<label className="inline-flex items-center mr-4">
		  <input type="radio" name="education" value="Post Graduate Degree" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Post Graduate Degree</span>
		</label>
		<label className="inline-flex items-center">
		  <input type="radio" name="education" value="Undergraduate Degree" onChange={handleChange} className="form-radio" />
		  <span className="ml-2">Undergraduate Degree</span>
		</label>
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
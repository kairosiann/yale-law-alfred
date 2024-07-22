import FellowshipForm from '@/components/FellowshipForm'

export default function Fellowship() {
  return (
    <main className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl mb-4">Interested in hiring a Fellow for your department?</h2>
      <p className="mb-4">Please answer the following questions to find the right fellow category.</p>
      <FellowshipForm />
    </main>
  )
}
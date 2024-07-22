import SectionSelector from '@/components/SectionSelector'

export default function Sections() {
  return (
    <main className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl mb-4">What section of the documents are you interested in?</h2>
      <SectionSelector />
    </main>
  )
}
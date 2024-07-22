import FileUpload from '@/components/FileUpload'

export default function Home() {
  return (
    <main className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl mb-4">Welcome to Alfred, your workflow concierge! Upload your documents below to continue.</h2>
      <FileUpload />
    </main>
  )
}
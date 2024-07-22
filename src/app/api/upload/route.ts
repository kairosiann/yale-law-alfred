import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files') as File[]

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    for (const file of files) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const path = join(process.cwd(), 'uploads', file.name)
      await writeFile(path, buffer)
    }

    return NextResponse.json({ message: 'Files uploaded successfully' })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 })
  }
}
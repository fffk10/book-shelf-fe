import { google, books_v1 } from 'googleapis'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const title: string = searchParams.get('title') ?? ''

  try {
    const books = google.books('v1')
    const response = await books.volumes.list({
      q: title,
    })

    const bookResponse: books_v1.Schema$Volumes = response.data
    return Response.json(bookResponse)
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

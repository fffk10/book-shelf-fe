'use client'

import { useEffect, useState } from 'react'
import DashBoard from '@/app/components/templates/DashBoard'
import { Book } from '@/app/types/Book'
import { books_v1 } from 'googleapis'
import BookCard from './components/atoms/BookCard'

const getBooks = async (title: string) => {
  const response = await fetch(`api/books?title=${title}`)
  const bookResponse: books_v1.Schema$Volume = await response.json()
  return bookResponse
}

const Home = () => {
  const [books, setBooks] = useState<books_v1.Schema$Volume | null>(null)

  useEffect(() => {
    getBooks('React').then(setBooks)
  }, [])

  // return <DashBoard />

  return (
    <div>
      Home
      {books &&
        books.items &&
        books.items.map((item) => {
          return (
            <BookCard
              title={item.volumeInfo.title}
              author={item.volumeInfo.authors[0]}
              image={item.volumeInfo.imageLinks.thumbnail}
            />
          )
        })}
    </div>
  )
}

export default Home

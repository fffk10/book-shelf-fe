import React from 'react'

import BookCard from '@/app/components/atoms/BookCard'
import { Book } from '@/app/types/Book'

type DashBoardProps = {}

const bookList: Book[] = [
  { title: 'book1', author: 'author1', image: 'http://image1.png' },
  { title: 'book2', author: 'author2', image: 'http://image2.png' },
  { title: 'book3', author: 'author3', image: 'http://image3.png' },
  { title: 'book4', author: 'author4', image: 'http://image4.png' },
  { title: 'book5', author: 'author5', image: 'http://image5.png' },
]

const DashBoard = (props: DashBoardProps) => {
  return (
    <div className='sm:flex'>
      {bookList.map((book) => {
        return <BookCard key={book.title} {...book} />
      })}
    </div>
  )
}

export default DashBoard

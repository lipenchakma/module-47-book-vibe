import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-20'>Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;


/**
 * For Data Load
 * 1. declare a state to store Items
 * 
 * 2. useEffect 
 * 
 * 3. fetch to load data
 * 
 * 4. and the finale set data to the state
 * 
 * */ 
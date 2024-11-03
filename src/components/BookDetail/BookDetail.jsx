import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../utility/addToDB';


const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id);
    const {bookName,author,review, image} = book;

    const handleMarkAsRead = (id) => {

        addToStoredReadList(id);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h3 className='font-semibold text-2xl'> By: {author} </h3>

                    <p className="py-6">{review}</p>
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-primary mr-6">Marked as Read</button>
                    <button className="btn btn-primary">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
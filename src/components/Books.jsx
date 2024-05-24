import BookCart from "./BookCart";
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch("/Books.json")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, []);
  return (
    <section>
      <div className="mt-24 text-center">
        <h2 className="text-5xl font-bold font-playfair">Books</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-14">
        {
            books.map(book => <BookCart key={book.bookId} book={book}></BookCart>)
        }
      </div>
    </section>
  );
};

export default Books;

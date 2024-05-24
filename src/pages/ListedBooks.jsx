import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
//   const [books, setBooks] = useState([]);
//   const [books2, setBooks2] = useState([]);
//   useEffect(() => {
//     const storedBooks = getBooks();
//     setBooks(storedBooks);
//   }, []);
//   useEffect(() => {
//     const storedBooks = getWishBooks();
//     setBooks2(storedBooks);
//   }, []);
//   const handleRatingSort = () => {
//     const sortRead = getBooks();
//     const sortWish = getWishBooks();
//     const newSortWish = sortWish.sort((a, b) => {
//       return b.rating - a.rating;
//     });
//     setBooks2(newSortWish);
//     const newSortRead = sortRead.sort((a, b) => {
//       return b.rating - a.rating;
//     });
//     setBooks(newSortRead);
//   };
//   const handlePagesSort = () => {
//     const sortRead = getBooks();
//     const sortWish = getWishBooks();
//     const newSortWish = sortWish.sort((a, b) => {
//       return b.totalPages - a.totalPages;
//     });
//     setBooks2(newSortWish);
//     const newSortRead = sortRead.sort((a, b) => {
//       return b.totalPages - a.totalPages;
//     });
//     setBooks(newSortRead);
//   };
//   const handleYearSort = () => {
//     const sortRead = getBooks();
//     const sortWish = getWishBooks();
//     const newSortWish = sortWish.sort((a, b) => {
//       return b.yearOfPublishing - a.yearOfPublishing;
//     });
//     setBooks2(newSortWish);
//     const newSortRead = sortRead.sort((a, b) => {
//       return b.yearOfPublishing - a.yearOfPublishing;
//     });
//     setBooks(newSortRead);
//   };
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold text-center bg-[#f3f3f3] rounded-2xl py-[34px] lg:mt-8 mt-4 mx-2 lg:mx-0">
        Books
      </h2>
      <div className="flex justify-center lg:mt-8 mt-4 mx-2 lg:mx-0">
        <details className="dropdown">
          <summary className="m-1 text-lg font-semibold text-white btn theme-color pr-6 pl-8">
            Sort By <RiArrowDropDownLine />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-6 lg:mt-[56px]">
      <Link
          to="/listed-books"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-300 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to='wishlist'
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-300 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
    </div>
  );
};

export default ListedBooks;
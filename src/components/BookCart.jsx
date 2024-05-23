import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookCart = ({ book }) => {
  const { bookId, author, image, rating, category, tags } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="transition hover:scale-105 hover:border-[#23BE0A] card bg-base-100 border-2"
    >
      <figure className="px-5 pt-5 lg:h-[500px] ">
        <img src={image} className="h-full w-full rounded-xl" />
      </figure>
      <div className="px-5 py-5 items-left text-left">
        <p className="space-x-4 mt-2">
          <button className="btn rounded-3xl text-[#23be0a]">{tags[0]}</button>

          <button className="btn rounded-3xl text-[#23be0a]">{tags[1]}</button>
        </p>
        <h2 className="mt-5 text-2xl font-bold">{book.bookName}</h2>
        <p className="mt-3 font-medium text-[#424242]">By : {author}</p>
        <hr className="border-dashed my-5" />
        <div className="flex items-center justify-between">
          <p>{category}</p>
          <div className="flex items-center gap-1">
            <p>{rating}</p>
            <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCart.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default BookCart;

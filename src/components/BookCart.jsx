import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookCart = ({ book }) => {
  const { bookId, author, image, rating, category, tags, bookName } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="transition-transform duration-300 ease-in-out transform  hover:scale-105 font-sans hover:border-[#23BE0A] cart-border"
    >
      <figure className="px-5 pt-5 lg:h-[500px] ">
        <img src={image} className="h-full w-full rounded-2xl" />
      </figure>
      <div className="px-5 py-5 items-left text-left">
        <p className="space-x-4 font-medium text-base mt-2">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="btn cart-tag-border rounded-3xl text-color"
            >
              {tag}
            </span>
          ))}
        </p>
        <h3 className="mt-5 text-2xl font-playfair font-bold">{bookName}</h3>
        <p className="mt-3 font-medium text-base opacity-90 font-sans">
          By : {author}
        </p>
        <hr className="cart-hr my-7" />
        <div className="flex items-center justify-between font-medium text-base opacity-75">
          <p>{category}</p>
          <div className="flex items-center gap-1">
            <p>{rating}</p>
            <FaRegStar />
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

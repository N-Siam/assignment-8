import { useEffect, useState } from "react";

const BookDetails = () => {
  // const book = useLoaderData();
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  const {
    bookName,
    image,
    author,
    review,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="container mx-auto mt-14">
      <div className="card lg:card-side bg-base-100">
        <div className="lg:w-[45%] p-9 lg:h-auto bg-base-200 rounded-xl">
          <figure>
            <img src={image} alt="Book" className="h-72 lg:h-auto" />
          </figure>
        </div>

        <div className="lg:w-[50%] mt-7 lg:mt-1 flex flex-col pl-14 space-y-5 text-[#131313B3]">
          <h2 className="card-title text-5xl text-black">{bookName}</h2>
          <p className="text-lg font-medium">By: {author}</p>
          <h2 className="border-y-2 py-3 my-5 font-bold text-xl text-black">
            {category}
          </h2>

          <h1 className="flex-grow leading-[2rem]">
            <span className="text-xl font-semibold text-black">Review: </span>
            {review}
          </h1>

          <div className="flex gap-4 border-b-2 pb-7">
            <h1 className="text-xl font-semibold text-black">Tags</h1>
            {tags.map((item, idx) => (
              <span
                className="bg-base-200 px-5 py-1 rounded-xl text-[#23BE0A]"
                key={idx}
              >
                #{item}
              </span>
            ))}
          </div>

          <div className="text-xl font-medium space-y-3">
            <h1>
              Number Of Pages:{" "}
              <span className="text-black font-bold ml-12">{totalPages}</span>
            </h1>
            <h1>
              Publisher:{" "}
              <span className="text-black font-bold ml-32">{publisher}</span>
            </h1>
            <h1>
              Year of Publishing:{" "}
              <span className="text-black font-bold ml-12">
                {yearOfPublishing}
              </span>
            </h1>
            <h1>
              Rating:{" "}
              <span className="text-black font-bold ml-40">{rating}</span>
            </h1>
          </div>

          <div className="card-actions gap-6">
            <button className="btn btn-outline text-xl">Read</button>
            <button className="btn btn-success text-xl">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

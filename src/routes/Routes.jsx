import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import ErrorPage from "../components/ErrorPage";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import BookDetails from "../components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/Books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../../public/book.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
            {
                index: true,
                element: <ReadBooks></ReadBooks>,
            },
            {
                path: 'wishlist',
                element:<WishlistBooks></WishlistBooks>,
            },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

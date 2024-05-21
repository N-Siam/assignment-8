import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg';

const Banner = () => {
    return (
        <section className="banner-bg rounded-3xl">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-1/2">
                    <h1 className="text-6xl font-bold font-playfair sm:text-6xl">Books to freshen up your bookshelf
                    </h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/listed-books' className="btn rounded-lg text-white font-bold text-lg font-sans theme-color my-12">View The List</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center w-1/2 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={bannerImage} alt="Banner" className="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;

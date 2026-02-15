import { Link } from "react-router-dom";
import hero from '../assets/signup-g.svg';
import Products from './Products';
const Hero = () => {
  return (
    <section className="w-5/6 min-h-screen mx-auto bg-linear-to-r bg-white dark:bg-black 
    flex flex-col items-center justify-between ">

      <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full h-svh">

        {/* Text + button*/}
        <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 dark:text-white text-gray-900 leading-tight drop-shadow-sm">
            Welcome to TailwindApp
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-md">
            This is a simple hero section built with Tailwind CSS and Flexbox — now with enhanced design.
          </p>
          <div className="flex gap-5">
            <Link to="login" className="mt-6 w-36 text-center px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg shadow-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Login Now
            </Link>
            <Link to="signup" className="mt-6 w-36 text-center px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg shadow-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Sign up Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={hero}
            alt="Hero Illustration"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <h1 className="text-5xl text-gray-300 font-bold dark:text-white">Popular Products</h1>
      {/* Products */}
      <div className="w-full mt-12">
        <Products  className='bg-amber-700'/>
      </div>

    </section>
  );
};

export default Hero;

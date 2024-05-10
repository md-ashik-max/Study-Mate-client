import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from './Animation - 1715328790901 (1).json';
import { FaArrowLeft } from "react-icons/fa";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
        <div>
            <Lottie animationData={error}></Lottie>
        </div>
        <div className='flex justify-end'>
            <Link to='/'>
                <button className="btn bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400"><FaArrowLeft></FaArrowLeft> Back to Home</button>
            </Link>
        </div>

    </div>
    );
};

export default ErrorPage;
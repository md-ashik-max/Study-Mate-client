import Lottie from "lottie-react";
import loadingSpinner from '../../../Animation - 1715372410361.json'


const Home = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-52 h-52">
                <Lottie animationData={loadingSpinner}></Lottie>
            </div>

        </div>
    );
};

export default Home;
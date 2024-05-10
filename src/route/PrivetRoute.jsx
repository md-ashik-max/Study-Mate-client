import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingSpinner from '../Animation - 1715372410361.json';

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    if (loader) {
        return <div className='max-h-screen className="flex justify-center items-center"'>
            <div className="w-52 h-52">
                <Lottie animationData={loadingSpinner}></Lottie>
            </div>
        </div>
    }

    if (user) {
        return children
    }


    return (<Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node,
}
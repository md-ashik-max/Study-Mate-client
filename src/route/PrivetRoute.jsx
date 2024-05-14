import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingSpinner from '../Animation - 1715372410361.json';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center items-center'>
             <Lottie className=" w-52 h-52" animationData={loadingSpinner}></Lottie>
        </div>

    }

    if (user) {
        return children
    }


    return (<Navigate state={location.pathname} to='/login' replace={true}></Navigate>
    );
};

export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node,
}
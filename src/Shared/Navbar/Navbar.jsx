import { useContext } from "react";
import { CgLogOut } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import userProfile from '../../assets/image.png';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(toast.success("user log out successfully"))
            .catch(error => {
                console.error(error)
                toast.error(error.massage)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/assignments">Assignments</NavLink></li>
        <li><NavLink to="/assignments">Register</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex md:flex-col items-center">
                    <img className="h-16 w-16" src="https://i.ibb.co/TgMVs48/student.png" alt="" />
                    <h3 className="text-2xl font-bold">Study Mate</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                        <div tabIndex={0} role="button" className="m-1">{user.photoURL ? <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /> : <img className="w-12 h-12 rounded-full" src={userProfile} alt="" />}</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-[#EDF7FA] rounded-box border-2 border-[#267188] w-52">
                            <div className="flex flex-col justify-center items-center">
                                {user.photoURL ? <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /> : <img className="w-12 h-12 rounded-full" src={userProfile} alt="" />}
                                <li className="text-black font-bold my-1">{user.displayName}</li>
                                <Link to="userProfile"> <button className="btn bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">View Profile</button></Link>
                            </div>
                            <hr />
                            <li><button onClick={handleLogOut} className="text-black font-bold hover:text-red-600">Log Out <CgLogOut className="text-xl font-bold"></CgLogOut></button></li>
                        </ul>

                    </div>
                        :
                        <Link to='/login'><button className="btn bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">Login</button></Link>




                }


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;
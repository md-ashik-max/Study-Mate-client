import { useContext } from "react";
import { CgLogOut } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import userProfile from '../../assets/image.png';
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(()=>{
                Swal.fire({
                    icon: "success",
                    title: "Log Out User Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(error => {
                console.error(error)
                toast.error(error.massage)
            })
    }

    const links = <>
        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink to="/assignment">Assignments</NavLink></li>
        {
            user ?
                <li className="font-bold"><NavLink to="/create">Create Assignments</NavLink></li>:''
            
        }
        {
            user?<li className="font-bold"><NavLink to="/pending">Pending Assignments</NavLink></li>:''
        }
         <li className="font-bold"><NavLink to="/about">About Us</NavLink></li>
         <li className="font-bold"><NavLink to="/contact">Contact Us</NavLink></li>

    </>
    return (
        <div className="navbar h-32 relative z-[10] max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="absolute ml-12 lg:ml-0 flex md:flex-col items-center">
                    <img className="h-16 w-16" src="https://i.ibb.co/TgMVs48/student.png" alt="" />
                    <h3 className="text-2xl font-extrabold font-playFair">Study <span className="text-[#3D52A0]">Mate</span></h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex z-[10]">
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
                        <Link to='/login'><button className="btn border border-sky-400 hover:text-white bg-gradient-to-r from-emerald-300 to-sky-400">Login</button></Link>




                }


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;
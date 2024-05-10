import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

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
               
            <Link to='/login'><button className="btn btn-outline btn-info">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;
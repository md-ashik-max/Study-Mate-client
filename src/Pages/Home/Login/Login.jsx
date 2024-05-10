import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'animate.css';
//  bg-gradient-to-r from-[#E2E2E2] to-[#C9D6FF]


const Login = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto rounded-2xl shadow-2xl">
            <div className="animate__animated animate__fadeInRight card shrink-0 md:w-1/2 py-6 bg-base-100">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold">Login</h3>
                    <div className="flex gap-8 text-xl my-6">
                        <button className="btn"><FaGoogle></FaGoogle></button>
                        <button className="btn"><FaFacebookF></FaFacebookF></button>
                        <button className="btn"><FaGithub></FaGithub></button>

                    </div>
                    <p>or use your email password</p>
                </div>

                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
            <div className="animate__animated animate__fadeInRight md:ml-12 w-full h-full  md:py-56 flex flex-col items-center bg-gradient-to-r from-emerald-300 to-sky-400 rounded-r-2xl rounded-t-3xl md:rounded-l-[150px] text-center">
                    <h3 className="text-4xl font-bold">Hello Friend!</h3>
                    <p>Register with your personal details to use all <br /> of site features</p>
                    <Link to='/register'><button className="btn btn-outline btn-info">Register</button></Link>
            </div>
        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto rounded-2xl shadow-2xl">
            <div className="animate__animated animate__fadeInRight w-full h-full  md:py-[244px] flex flex-col items-center bg-gradient-to-r from-emerald-300 to-sky-400 rounded-r-2xl rounded-t-3xl md:rounded-r-[150px] text-center">
                <h3 className="text-4xl font-bold">Welcome Back!</h3>
                <p>Enter your personal details to use all <br /> of site features</p>
                <Link to='/login'><button className="btn btn-outline btn-info">Login</button></Link>
            </div>
            <div className="animate__animated animate__fadeInRight card shrink-0 md:w-1/2 py-6 bg-base-100">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold">Register</h3>
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
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
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
                      <input className="btn bg-transparent hover:bg-gradient-to-r from-emerald-300 to-sky-400" type="submit" value="Register" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;
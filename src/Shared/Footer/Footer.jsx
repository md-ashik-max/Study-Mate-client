import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer items-center p-10 bg-gradient-to-r from-[#E2E2E2] to-[#C9D6FF] text-black">
            <aside>
                <img className="h-16 w-16" src="https://i.ibb.co/TgMVs48/student.png" alt="" />
                <h3 className="text-2xl font-bold font-playFair">Study Mate</h3>
                <p>Stay Connected. Contact us for support.<br />  Explore more.Follow us on social media</p>
                <h3 className="text-2xl font-bold font-raleway mt-6">Social Media</h3>
                <div className="text-xl flex gap-4">
                    <FaGoogle></FaGoogle>
                    <FaFacebookF></FaFacebookF>
                    <FaGithub></FaGithub>
                    <FaTwitter></FaTwitter>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join w-full">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;
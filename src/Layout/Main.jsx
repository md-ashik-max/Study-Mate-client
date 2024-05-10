import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import SubFooter from "../Shared/Footer/SubFooter";


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>

            <Footer></Footer>
            <SubFooter></SubFooter>

        </div>
    );
};

export default Main;
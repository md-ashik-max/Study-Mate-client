import { FaArrowLeft } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
    const loadedAssignment = useLoaderData();
    const { title, image, description, mark, date, level } = loadedAssignment;
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="my-6">
                <Link to='/assignment'>
                    <button className="btn px-6 py-2 bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center text-2xl font-bold font-playFair"><FaArrowLeft></FaArrowLeft>Back</button>
                </Link>
            </div>
            <div className="card bg-base-100 shadow-xl relative">
                <figure><img className="w-full" src={image} alt="" /></figure>
                <div className="p-4 text-xl font-bold">
                    <p>Level : {level}</p>
                </div>
                <div className="flex justify-between px-4 pt-4">
                    <p className="text-xl font-bold">Mark : {mark}</p>
                    <p className="text-xl font-bold flex items-center"><MdDateRange /> : {date}</p>
                </div>
                <div className="p-4 flex gap-6">
                    <div>
                        <div>
                            <h2 className="card-title text-2xl font-bold font-playFair">
                                {title}
                            </h2>
                        </div>
                        <p className="my-4">{description}</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentDetails;
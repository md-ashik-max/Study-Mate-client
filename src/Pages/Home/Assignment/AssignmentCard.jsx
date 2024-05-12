import PropTypes from "prop-types";
import { FaPencil } from "react-icons/fa6";
import { MdDateRange, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
// <p>{description.slice(0, 50)}...</p>

const AssignmentCard = ({ assignment }) => {
    const { title, image, description, mark, date, level } = assignment;
    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure><img className="h-64 w-full" src={image} alt="" /></figure>
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
                    <p className="my-4">{description.slice(0, 100)}...</p>
                    <div className="w-full flex gap-6 items-center">
                        <button className="btn text-xl text-[#14A76C] border-[#14A76C] bg-transparent hover:bg-[#14A76C] hover:text-white"><FaPencil /></button>

                        <Link><button className="btn px-12 bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">View Assignment</button></Link>

                        <button className="btn text-xl text-[#C50900] bg-transparent border-[#C50900] hover:bg-[#C50900] hover:text-white"><MdDelete /></button>
                    </div>

                </div>
            </div>
            <div className="absolute top-4 right-4">
                <button className=" bg-[#2E9CCA] text-white font-bold p-2 rounded-xl">{level} Level</button>
            </div>
        </div>
    );
};

export default AssignmentCard;
AssignmentCard.propTypes = {
    assignment: PropTypes.object
}
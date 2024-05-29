import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDateRange, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css';
import { AuthContext } from "../../../providers/AuthProvider";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, image, description, mark, date, level, email } = assignment;
    const handleDelete = id => {
        if (user.email === email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/assignment/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remaining = assignments.filter(assignment => assignment._id !== id);
                                setAssignments(remaining)
                            }
                        })

                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can not delete this"
            });
        }
    }
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div data-aos="zoom-in" className="card bg-base-100 shadow-xl relative">
            <figure><img className="h-64 w-full" src={image} alt="" /></figure>
            <div className="flex justify-between px-4 pt-4">
                <p className="text-xl font-bold">Mark : {mark}</p>
                <p className="text-xl font-bold flex items-center"><MdDateRange /> : {date}</p>
            </div>
            <div className="p-4 flex gap-6">
                <div>
                    <div className="h-16">
                        <h2 className="card-title text-2xl font-bold font-playFair">
                            {title}
                        </h2>
                    </div>
                    <div className="h-20">
                        <p className="my-4">{description.slice(0, 100)}...</p>
                    </div>
                    <div className="w-full flex gap-2 md:gap-6 items-center">
                        <Link to={`/updateAssignment/${_id}`}>
                            <button className="btn text-xl text-[#14A76C] border-[#14A76C] bg-transparent hover:bg-[#14A76C] hover:text-white"><FaEdit /></button>
                        </Link>

                        <Link to={`/assignmentDetails/${_id}`}><button className="btn md:px-12 bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">View Assignment</button></Link>

                        <button onClick={() => handleDelete(_id)} className="btn text-xl text-[#C50900] bg-transparent border-[#C50900] hover:bg-[#C50900] hover:text-white"><MdDelete /></button>
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
    assignment: PropTypes.object,
    assignments: PropTypes.any.isRequired,
    setAssignments: PropTypes.func.isRequired
}
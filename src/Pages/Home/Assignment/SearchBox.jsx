import { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const SearchBox = ({ loadedAssignment, setAssignments }) => {
    const [search, setSearch] = useState("");
    const [hidden,setHidden]= useState('hidden')
    const [filteredAssignments, setFilteredAssignments] = useState(loadedAssignment);
    const handleChange = (event) => {
        setSearch(event.target.value.toLowerCase()); 
        const filteredData = loadedAssignment.filter((assignment) => {
            
            const searchFields = ['title', 'mark']; 
            return searchFields.some((field) =>
                assignment[field].toLowerCase().includes(search)
            );
        });
        if(filteredData){
            setHidden('mt-4 absolute z-10 bg-base-100 px-12 pb-12 rounded-xl')
        }else{
            setHidden('hidden')
        }
        setFilteredAssignments(filteredData);
        setAssignments(filteredData)
    };
    const handleAssignmentFilter = filter => {
        if (filter === 'all') {
            setAssignments(filteredAssignments);
        }
        else if (filter === 'easy') {
            const filteredAssignment = filteredAssignments.filter(assignment => assignment.level === 'Easy');
            setAssignments(filteredAssignment);
        }
        else if (filter === 'medium') {
            const filteredAssignment = filteredAssignments.filter(assignment => assignment.level === 'Medium');
            setAssignments(filteredAssignment);
        }
        else if (filter === 'hard') {
            const filteredAssignment = filteredAssignments.filter(assignment => assignment.level === 'Hard');
            setAssignments(filteredAssignment);
        }

    }



    return (
        <section className="max-w-7xl mx-6 md:mx-12 my-24 lg:mx-auto bg-cyan-500 px-12 py-4 rounded-xl">
            <div className="grid grid-cols-5 md:grid-cols-10 items-center gap-2">
                <input
                    type="text"
                    placeholder="Search ..."
                    onChange={handleChange}
                    value={search}
                    autoComplete="off"
                    className="w-full px-4 py-2 rounded-md col-span-2 md:col-span-7"
                />

                <div className="col-span-2 flex justify-between items-center w-full rounded-xl p-2">
                    <h3 className="font-playFair font-extrabold">Select Level</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 bg-transparent"><FaAngleDown className="text-xl font-bold"></FaAngleDown></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleAssignmentFilter('all')}><a>All</a></li>
                            <li onClick={() => handleAssignmentFilter('easy')}><a>Easy</a></li>
                            <li onClick={() => handleAssignmentFilter('medium')}><a>Medium</a></li>
                            <li onClick={() => handleAssignmentFilter('hard')}><a>Hard</a></li>
                        </ul>
                    </div>
                </div>


                <div className="col-span-1 text-xl">
                    <FaSearch />
                </div>
            </div>
            <div className={hidden}>
                {filteredAssignments.length > 0 ? ( 
                    <ul>
                        {filteredAssignments.map((assignment) => (
                            <Link key={assignment._id} to={`/assignmentDetails/${assignment._id}`}>
                                <li className="hover:text-white hover:p-2 rounded-xl hover:bg-slate-500">
                                    {assignment.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p>No assignments found matching your search.</p>
                )}
            </div>
        </section>
    );
};

export default SearchBox;
SearchBox.propTypes = {
    loadedAssignment: PropTypes.array,
    setAssignments: PropTypes.array
}
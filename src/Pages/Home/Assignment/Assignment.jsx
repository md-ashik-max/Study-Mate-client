import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";


const Assignment = () => {
    const loadedAssignment = useLoaderData();
    const[assignments,setAssignments]=useState(loadedAssignment);
    const handleAssignmentFilter = filter => {
        if (filter === 'all') {
            setAssignments(loadedAssignment);
        }
        else if (filter === 'easy') {
            const filteredAssignments = loadedAssignment.filter(assignment => assignment.level==='Easy');
            setAssignments(filteredAssignments);
        }
        else if (filter === 'medium') {
            const filteredAssignments = loadedAssignment.filter(assignment => assignment.level==='Medium');
            setAssignments(filteredAssignments);
        }
        else if(filter==='hard'){
            const filteredAssignments = loadedAssignment.filter(assignment => assignment.level==='Hard');
            setAssignments(filteredAssignments);
        }

    }

    return (
        <div className="-mt-32">
            <div className="relative">
                <img className="h-[600px] lg:h-[800px] w-full" src="https://i.ibb.co/jVMcSTN/final-ass-banner.jpg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-[#0B0C1040]">
                    <div className="md:w-1/2 text-center py-32 mx-6 md:ml-24 lg:ml-80 md:py-40 lg:py-64 text-white">
                        <h1 className="animate__animated animate__fadeInUp text-4xl font-extrabold font-playFair">Quest for Mastery ,<br />
                            Your Assignment Odyssey Begins Here</h1>
                        <p className="my-8 animate__animated animate__fadeInUp">Discover a comprehensive list of assignments tailored just for you. Dive into a world of tasks and projects designed to challenge and inspire. From academic endeavors to professional pursuits, find everything you need to stay organized and motivated. Your journey starts here</p>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto my-20 text-center">
                <h1 className="text-4xl font-extrabold font-playFair">Assignment Universe</h1>
                <p className="mt-6"> Explore a galaxy of tasks and projects designed to challenge and inspire. From academic pursuits to professional endeavors, find everything you need to excel and achieve your goals. Welcome to your ultimate assignment destination</p>
            </div>
            <div className="max-w-7xl mx-auto flex justify-end border-t-2 mb-12">
                <div className="border-x-2 border-b-2 flex justify-between items-center w-52 rounded-xl p-2">
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

            </div>

            <div className="max-w-7xl mx-auto my-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)
                }
            </div>

        </div>
    );
};

export default Assignment;
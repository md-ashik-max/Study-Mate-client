import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
// import TableBody from "./TableBody";
// import { AuthContext } from "../../../providers/AuthProvider";
import TableBody from "./TableBody";
// import Swal from "sweetalert2";


const PendingAssignment = () => {
    // const { user } = useContext(AuthContext);
    const loadedSubmittedAssignment = useLoaderData();
    const [submitAssignment, setSubmitAssignment] = useState(loadedSubmittedAssignment);


    // if (status === 'confirm') {
    //     const remaining = submitAssignment.filter(subAssignment => subAssignment.status !== 'confirm');
    //     setSubmitAssignment(remaining);
    // }
    // const handleShowAlert = () => {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "You cannot mark your own assignment!",
    //     });
    // }

    return (
        <div className="max-w-7xl mx-6 lg:mx-auto text-black bg-gradient-to-r from-[#5AB9EA] to-[#C1C4E8] p-6 rounded-xl shadow-2xl my-24">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-black text-lg font-bold">
                            <th></th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Mark</th>
                            <th>Assignment Pdf</th>
                            <th>Give Mark</th>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            submitAssignment.map((assignment, index) => <tr key={assignment._id}>
                                <th>{index + 1}</th>
                                <td className="text-xl font-bold">{assignment.name}</td>
                                <td className="text-xl font-bold">{assignment.assignmentName}</td>
                                <td className="text-xl font-bold">{assignment.assignmentMark}</td>
                                <td>  <iframe
                                    src={assignment.file}
                                    width="500"
                                    height="200"
                                    title="Embedded Webpage"
                                    frameBorder="0"
                                ></iframe> </td>
                                <td>
                                    {
                                        assignment.email === user?.email ? <button onClick={handleShowAlert} className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg">Give Mark</button> : <Link to={`/giveMark/${assignment._id}`}>
                                            <button className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg">Give Mark</button>
                                        </Link>
                                    }
                                </td>
                                <td> {
                                    assignment.status === 'confirm' ? <span>Completed</span> : <button className=" btn text-[#29B170] border-2 border-[#29B170] p-2 rounded-lg">Please Confirm</button>
                                }</td>
                            </tr>)
                        } */}



                        {
                            submitAssignment.map((assignment,index) =><TableBody key={index}
                            assignment={assignment}
                            index={index}
                            submitAssignment={submitAssignment}
                            setSubmitAssignment={setSubmitAssignment}
                            >

                            </TableBody>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PendingAssignment;
<tr>
    <th>1</th>
    <td>Cy Ganderton</td>
    <td>Quality Control Specialist</td>
    <td>Blue</td>
</tr>
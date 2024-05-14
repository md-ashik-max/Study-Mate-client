import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableBody from "./TableBody";


const PendingAssignment = () => {
    const loadedSubmittedAssignment = useLoaderData();
    const [submitAssignment,setSubmitAssignment]=useState(loadedSubmittedAssignment);
    
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
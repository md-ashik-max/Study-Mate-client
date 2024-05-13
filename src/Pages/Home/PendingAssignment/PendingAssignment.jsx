import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableBody from "./TableBody";


const PendingAssignment = () => {
    const loadedSubmittedAssignment = useLoaderData();
    const [submitAssignment,setSubmitAssignment]=useState(loadedSubmittedAssignment);
    
    return (
        <div className="max-w-7xl mx-auto">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
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
                            submitAssignment.map((assignment, index) =><TableBody key={index}
                            assignment={assignment}
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
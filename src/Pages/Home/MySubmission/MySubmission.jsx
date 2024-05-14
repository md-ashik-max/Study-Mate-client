
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";



const MySubmission = () => {
    const { user } = useContext(AuthContext);
    const loadedSubmission = useLoaderData();
    const [totalSubmission, setTotalSubmission] = useState([]);

    useEffect(() => {
        const remaining = loadedSubmission.filter(submission => submission.email === user?.email);
        setTotalSubmission(remaining);
    }, [loadedSubmission, user?.email]);
    console.log(totalSubmission)


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
                            <th>Obtained Mark</th>
                            <th>Examiner Feedback</th>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            totalSubmission.map((assignment, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td className="text-xl font-bold">{assignment.name}</td>
                                <td className="text-xl font-bold">{assignment.assignmentName}</td>
                                <td className="text-xl font-bold">{assignment.assignmentMark}</td>
                                <td>  <iframe
                                    src={assignment.file}
                                    width="300"
                                    height="200"
                                    title="Embedded Webpage"
                                    frameBorder="0"
                                ></iframe> </td>

                                {assignment.status === 'confirm' ? <td className="text-xl font-bold">{assignment.obtainMark}</td> : <td></td>}

                                {assignment.status === 'confirm' ? <td className="text-xl font-bold">{assignment.feedback}</td> : <td></td>}

                                {assignment.status === 'confirm' ? <td><span className="text-xl text-green-500 ">Completed</span></td> : <td><span className="text-xl text-orange-400">Pending</span></td>}



                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySubmission;
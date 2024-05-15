
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';



const TableBody = ({ assignment, index, submitAssignment, setSubmitAssignment }) => {

    const { user } = useContext(AuthContext);

    const { _id, name, assignmentName, assignmentMark, file, status,email } = assignment;

    if (status === 'confirm') {
        const remaining = submitAssignment.filter(subAssignment => subAssignment.status !== 'confirm');
        setSubmitAssignment(remaining);
    }
    const handleShowAlert = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You cannot mark your own assignment!",
        });
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td className="text-xl font-bold">{name}</td>
            <td className="text-xl font-bold">{assignmentName}</td>
            <td className="text-xl font-bold">{assignmentMark}</td>
            <td>  <iframe
                src={file}
                width="500"
                height="200"
                title="Embedded Webpage"
                frameBorder="0"
            ></iframe> </td>
            <td>
                {
                    email === user?.email ? <button onClick={handleShowAlert} className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg">Give Mark</button> : <Link to={`/giveMark/${_id}`}>
                        <button className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg">Give Mark</button>
                    </Link>
                }
            </td>
            <td> {
                status === 'confirm' ? <span>confirmed</span> : <button className=" btn text-[#29B170] border-2 border-[#29B170] p-2 rounded-lg">Please Confirm</button>
            }</td>
        </tr>
    );
};

export default TableBody;
TableBody.propTypes = {
    assignment: PropTypes.object,
    index: PropTypes.number,
    submitAssignment: PropTypes.any.isRequired,
    setSubmitAssignment: PropTypes.func
}
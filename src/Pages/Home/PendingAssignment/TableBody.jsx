
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TableBody = ({ assignment, index, submitAssignment, setSubmitAssignment }) => {

    const { _id, name, img, assignmentName, assignmentMark, file } = assignment;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className="h-16 w-16 rounded-full" src={img} alt="" /></td>
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
                <Link to={`/giveMark/${_id}`}>
                    <button className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg">Give Mark</button>
                </Link>
            </td>
            <td className="text-xl font-bold">Pending</td>
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
{/* <form onSubmit={()=>handleGivenMark(_id)} className="flex flex-col space-y-8">
<div className="form-control">
    <label className="label">
        <span className="label-text">Mark</span>
    </label>
    <input type="text" placeholder="Mark" name="mark" className="input input-bordered" />
</div>
<div className="form-control">
    <label className="label">
        <span className="label-text">Examiner Feedback</span>
    </label>
    <input type="text" placeholder="Examiner FeedBack" name="feedback" className="input input-bordered" />
</div>
<input className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg" type="submit" value="Confirm" />
</form> */}
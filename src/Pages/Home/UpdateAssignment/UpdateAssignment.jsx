import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateAssignment = () => {
    const { user } = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(null);
    const { _id, title, image, description, mark, date, level} = useLoaderData();
    const navigate=useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const mark = form.mark.value;
        const image = form.image.value;
        const level = form.level.value;
        const date = form.date.value;
        const email = user.email;
        const updateAssignment = { title, description, mark, image, level, date, email };
        fetch(`https://study-mate-server-liart.vercel.app/assignment/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAssignment),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/assignment")

                }
            })
    };
    return (
        <div className='max-w-5xl md:mx-12 lg:mx-auto shadow-2xl rounded-xl my-8 md:my-20'>
            <div className='flex flex-col justify-center items-center text-white text-center py-32 bg-gradient-to-r from-[#5AB9Ea] to-[#8060D0] rounded-b-[150px]'>
                <h3 className='animate__animated animate__fadeInUp text-3xl font-bold font-raleway'>Update Assignment</h3>
                <p className='animate__animated animate__fadeInUp font-bold font-raleway py-6 max-w-3xl'>Stay on track with our update assignment section. Effortlessly manage tasks, track progress, and ensure timely completion. Your journey to success just got smoother.</p>
            </div>
            <div className='animate__animated animate__fadeInUp p-8 md:px-24 md:pb-24 md:pt-6'>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' defaultValue={title} placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mark</span>
                            </label>
                            <input type="text" name='mark' defaultValue={mark} placeholder="mark" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='image' defaultValue={image} placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Level</span>
                            </label>
                            <select
                                className="select select-bordered w-full"
                                name="level"
                            >
                                <option value={level}>
                      {level}
                    </option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label>Select Date</label>
                            <DatePicker
                                className='border-2 p-3 w-full mt-2 rounded-lg'
                                id="date"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yyyy"
                                value={date}
                                placeholderText="MM/DD/YYYY"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Update Assignment" className="btn border border-sky-400 text-xl font-playFair text-white bg-[#2E9CCA]" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateAssignment;
import { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AssignmentDetails = () => {
    const loadedAssignment = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, image, description, mark, date, level } = loadedAssignment;

    const [pdfSrc, setPdfSrc] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return; // No file selected

        // Check if the selected file is a PDF
        if (file.type === 'application/pdf') {
            try {
                const fileUrl = URL.createObjectURL(file);
                setPdfSrc(fileUrl);
            } catch (error) {
                console.error('Error creating object URL:', error);
            }
        } else {
            alert('Please select a PDF file.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const file = pdfSrc;
        const text = form.text.value;
        const assignmentName = title;
        const assignmentMark = mark;
        const email = user.email;
        const img = user.photoURL;
        const name = user.displayName;
        const submittedAssignment = { file, text, assignmentName, assignmentMark, img, name, email };
        console.log(submittedAssignment)
        fetch('http://localhost:5000/submitted', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Assignment Submitted Successfully')
                }
                form.reset();
            })


    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="my-6">
                <Link to='/assignment'>
                    <button className="btn px-6 py-2 bg-transparent text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center text-2xl font-bold font-playFair"><FaArrowLeft></FaArrowLeft>Back</button>
                </Link>
            </div>
            <div className="card bg-base-100 shadow-xl relative">
                <figure><img className="w-full" src={image} alt="" /></figure>
                <div className="p-4 text-xl font-bold">
                    <p>Level : {level}</p>
                </div>
                <div className="flex justify-between px-4 pt-4">
                    <p className="text-xl font-bold">Mark : {mark}</p>
                    <p className="text-xl font-bold flex items-center"><MdDateRange /> : {date}</p>
                </div>
                <div className="p-4 flex gap-6">
                    <div>
                        <div>
                            <h2 className="card-title text-2xl font-bold font-playFair">
                                {title}
                            </h2>
                        </div>
                        <p className="my-4">{description}</p>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg" onClick={() => document.getElementById('my_modal_4').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-3xl">
                                <div className="max-w-2xl text-center">
                                    <h3 className="text-4xl font-extrabold font-playFair">Effortless Submission:Simplify Your Assignment Turn-In Process</h3>
                                    <p className="my-6">Please ensure all required fields are completed and your assignment is correctly formatted before submitting</p>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                                        <input type="file" onChange={handleFileChange} accept=".pdf" />
                                        <textarea name="text" className="textarea textarea-bordered" placeholder="Type Here"></textarea>
                                        <input className="text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg" type="submit" value="Submit" />
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                                <ToastContainer></ToastContainer>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentDetails;
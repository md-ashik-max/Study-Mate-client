import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const GiveMarkContainer = () => {
    const loadedSubmit = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { _id } = loadedSubmit;
    const handleGivenMark = (e) => {
        e.preventDefault();
        const form = e.target;
        const obtainMark = form.mark.value;
        const feedback = form.feedback.value;
        const examinerName = user.displayName;
        fetch(`http://localhost:5000/submitted/${_id}`,{
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm', obtainMark, examinerName, feedback })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate("/pending")
                    Swal.fire({
                        title: "Mark has been successfully given.",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });

                }
            })

    }
    return (
        <div className="max-w-5xl mx-auto shadow-2xl rounded-xl p-6 my-24">
            <form onSubmit={handleGivenMark} className="flex flex-col space-y-8">
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
            </form>

        </div>
    );
};

export default GiveMarkContainer;
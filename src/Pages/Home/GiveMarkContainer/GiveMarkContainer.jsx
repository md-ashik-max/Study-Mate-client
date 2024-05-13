import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const GiveMarkContainer = () => {
    const loadedSubmit = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id } = loadedSubmit;
    console.log(_id)
    const handleGivenMark = (e) => {
        e.preventDefault();
        const form = e.target;
        const obtainMark = form.mark.value;
        const feedback = form.feedback.value;
        const examinerName = user.email;
        console.log(examinerName, obtainMark, feedback)
        fetch(`http://localhost:5000/submitted/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
        body: JSON.stringify({status:'confirm',obtainMark,examinerName,feedback})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('mark given')

                }
            })

    }
    return (
        <div>
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
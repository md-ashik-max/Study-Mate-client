import { BiSolidMessageRounded } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Question = () => {
    return (
        <div className="my-12">
            <div className="text-center">
                <h3 className="text-xl font-bold text-sky-400">STUDY MATE QUERIES</h3>
                <h1 className="font-playFair text-4xl font-bold">Frequently Asked Questions</h1>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 shadow-2xl shadow-sky-100 md:col-span-2 rounded-xl">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-bold">
                                How do I create an account on the website?
                            </div>
                            <div className="collapse-content">
                                <p>To create an account, simply click on the Sign Up button on the homepage and fill out the required information. You will then receive a confirmation email to activate your account.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                How can I access the assignments assigned to me?
                            </div>
                            <div className="collapse-content">
                                <p> Once you log in to your account, you can navigate to the Assignments section, where you will find all the assignments assigned to you. Simply click on the assignment title to view the details.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                What should I do if I encounter technical issues while completing an assignment?
                            </div>
                            <div className="collapse-content">
                                <p>If you encounter any technical issues, please reach out to our support team through the Contact Us page. We will assist you in resolving the issue promptly.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                How do I submit an assignment?
                            </div>
                            <div className="collapse-content">
                                <p>To submit an assignment, go to the assignment details page and click on the Submit Assignment button. Follow the instructions to upload your completed assignment file.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                Can I communicate with my friends or classmates through the website?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can connect with your friends or classmates through our messaging feature. Simply add them as friends and start a conversation.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                Is there a way to track the status of my submitted assignments?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can track the status of your submitted assignments on the assignment details page. The status will indicate whether your assignment is pending, submitted, or graded.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                What happens if I miss the deadline for an assignment?
                            </div>
                            <div className="collapse-content">
                                <p> If you miss the deadline for an assignment, please contact your instructor or course administrator to discuss possible extensions or alternative arrangements.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                How are assignments graded, and when can I expect feedback?
                            </div>
                            <div className="collapse-content">
                                <p>Assignments are typically graded by your instructor or course administrator. You can expect feedback and grades to be provided within a specified timeframe, which will be communicated to you.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold">
                                Are there any resources available to help me understand the assignment requirements better?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we provide detailed assignment instructions and guidelines to help you understand the requirements better. Additionally, you can reach out to your instructor or peers for clarification.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card w-96 bg-gradient-to-r from-[#84CEEB] to-[#8860B0] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/zrHjTPz/smiley-woman.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="font-raleway text-white text-2xl font-bold">Need Support?</h2>
                            <p className="text-white py-4">Facing issues? Contact us for assistance. We are here to help you succeed!</p>
                            <div className="card-actions">
                                <div className="flex flex-col items-center bg-transparent border border-sky-400 text-white bg-[#2E9CCA] p-2 rounded-2xl">
                                    <button className="text-3xl"><BiSolidMessageRounded></BiSolidMessageRounded></button>
                                    <p className="font-bold">Contact Us</p>
                                </div>
                                <div className="flex flex-col items-center bg-transparent border border-sky-400 text-white bg-[#17E9E0] p-2 px-6 rounded-2xl">
                                    <button className="text-3xl"><IoCall /></button>
                                    <p className="font-bold">Call Us</p>
                                </div>
                                <div className="flex flex-col items-center bg-transparent border border-[#5680E9] text-white bg-[#5680E9] p-2 rounded-2xl">
                                    <button className="text-3xl"><FaVideo /></button>
                                    <p className="font-bold">Video Call</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#77A6F7] text-neutral-content mt-6">
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-bold text-white font-raleway">Download Our App</h2>
                            <p className="text-white py-4">Take learning on the go. Download our app for seamless access anytime, anywhere!</p>
                            <div className="flex gap-6 items-center">
                               <img className="w-1/2" src="https://i.ibb.co/090kyKq/1664287128google-play-store-logo-png.webp" alt="" />
                               <img className="w-1/2 h-12" src="https://i.ibb.co/s3z4ntX/app-store-logo-C6-E5-D2-A3-EF-seeklogo-com.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Question;
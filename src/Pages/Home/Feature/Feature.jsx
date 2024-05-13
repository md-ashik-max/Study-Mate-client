
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";

const Feature = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className="max-w-7xl mx-6 lg:mx-auto my-16">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold font-playFair">Powerful Features</h1>
                <p className="my-6">Special features which help you keep students on track <br /> and engaged during class time.</p>

            </div>
            <div className="my-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                <div data-aos="zoom-in-right" className="h-96">
                    <small className="font-bold">STUDY SMARTER, TOGETHER</small>
                    <h2 className="text-[40px] font-playFair font-bold">Your Ultimate Study Companion</h2>
                    <img src="https://i.ibb.co/HNdXCz7/icons8-horizontal-line-100.png" alt="" />
                    <p className="mb-4">With Study Mate, never face academic challenges alone. Connect with peers, share notes, collaborate on projects, and conquer coursework together. Whether you are preparing for exams or working on group assignments, Study Mate provides the support and collaboration tools you need to excel. Join forces with your study mates and unleash your full academic potentia</p>
                    <button className="flex text-xl font-bold items-center hover:bg-transparent border border-[#5680E9] text-white hover:text-[#5680E9] bg-[#5680E9] p-3 rounded-lg">View All Details <span><FaArrowRight></FaArrowRight></span></button>

                </div>
                <div data-aos="zoom-in-left" className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-96 lg:h-96"><img className="h-full w-full" src="https://i.ibb.co/MVVNGQc/teacher.jpg" alt="Album" /></figure>
                    <div className="card-body lg:w-96">
                        <h2 className="text-3xl font-playFair font-bold">View Students Screen</h2>
                        <p className="my-6">Teachers gain real-time insight into students screens for interactive learning experiences.</p>
                        <button className="btn bg-transparent text-xl font-bold text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">Learn More</button>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-96 lg:h-96"><img className="h-full w-full" src="https://i.ibb.co/gDmpmLc/handsUp.jpg" alt="Album" /></figure>
                    <div className="card-body lg:w-96">
                        <h2 className="text-3xl font-playFair font-bold">Assignment And Quiz</h2>
                        <p className="my-6">Empower learning with interactive assignments and quizzes for comprehensive assessment and engagement.</p>
                        <button className="btn bg-transparent text-xl font-bold text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">Learn More</button>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-96 lg:h-96"><img className="h-full w-full" src="https://i.ibb.co/Y7JP0W5/students.jpg" alt="Album" /></figure>
                    <div className="card-body lg:w-96">
                        <h2 className="text-3xl font-playFair font-bold">Automatically Grading</h2>
                        <p className="my-6">Streamline assessment with automatic grading for efficient and accurate evaluation of student submissions.</p>
                        <button className="btn bg-transparent text-xl font-bold text-emerald-300 border border-sky-400 hover:text-white  hover:bg-gradient-to-r from-emerald-300 to-sky-400">Learn More</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Feature;
import { useEffect, useState } from "react";
import CourseCart from "./CourseCart";


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    return (
        <div className="my-24 max-w-7xl mx-auto">
            <div className="text-center">
                <p className="text-[#5680E9] text-lg font-bold">Popular Courses</p>
                <h2 className="text-4xl font-bold font-playFair">Choose Our Top Courses</h2>
                <p className="my-4">Explore our popular courses, featuring top-rated programs in programming, <br /> web development, full-stack development, and UX/UI design. <br /> Learn from expert trainers and advance your skills today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                {
                    courses.map(course => <CourseCart key={course._id} course={course}></CourseCart>)
                }
            </div>

        </div>
    );
};

export default Courses;


const Achievement = () => {
    return (
        <div className="my-24 max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-playFair font-bold">Our Achievements</h2>
                <p className="mt-4">With our super powers we have reached this</p>
            </div>
            <div className="mt-12 flex justify-between">
                <div className="flex justify-center items-center gap-6 border-2 border-[#5680E9] py-12 px-20 rounded-xl">
                    <img className="w-28" src="https://i.ibb.co/Kqgq4bD/icons8-university-64.png" alt="" />
                    <div>
                        <h2 className="text-3xl font-bold">89+</h2>
                        <h4 className="text-xl font-bold">University</h4>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 border-2 border-[#5680E9] py-12 px-20 rounded-xl">
                    <img className="w-28" src="https://i.ibb.co/5XQLY2G/icons8-school-60.png" alt="" />
                    <div>
                        <h2 className="text-3xl font-bold">204+</h2>
                        <h4 className="text-xl font-bold">School</h4>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 border-2 border-[#5680E9] py-12 px-20 rounded-xl">
                    <img className="w-28" src="https://i.ibb.co/7px1z5h/icons8-student-male-96.png" alt="" />
                    <div>
                        <h2 className="text-3xl font-bold">50k+</h2>
                        <h4 className="text-xl font-bold">Students</h4>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Achievement;
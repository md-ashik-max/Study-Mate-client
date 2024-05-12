


{/* <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/z8WHh1R/BANNER-2-ML.webp)` }}>
<div className="md:h-[700px] py-36 md:py-64 bg-[#0B0C1040]">
    <div className="max-w-7xl mx-20 lg:mx-auto">
        <h1 className="text-4xl font-bold text-white">Take your time and <br /> learn from anywhere</h1>
        <p className="text-white my-6">Elevate your academic journey with our dynamic assignment <br /> management platform. Seamlessly organize, submit, and track tasks.</p>
        <button className="btn bg-[#5680E9]">Get Started</button>
    </div>
</div>
</div> */}

const Banner = () => {
    return (
        <div className='overflow-hidden -mt-32'>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/z8WHh1R/BANNER-2-ML.webp)` }}>
                <div className="md:h-[800px] py-36 md:py-64 bg-[#0B0C1040]">
                    <div className="animate__animated animate__fadeInUp max-w-7xl mx-20 lg:mx-auto">
                        <h1 className="text-4xl font-bold text-white">Take your time and <br /> learn from anywhere</h1>
                        <p className="text-white my-6">Elevate your academic journey with our dynamic assignment <br /> management platform. Seamlessly organize, submit, and track tasks.</p>
                        <button className="btn bg-[#5680E9]">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
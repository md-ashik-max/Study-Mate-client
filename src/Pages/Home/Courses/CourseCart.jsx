import PropTypes from 'prop-types'
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { PiNotebookDuotone } from 'react-icons/pi';
import { TbUser } from 'react-icons/tb';

const CourseCart = ({ course }) => {
    const { name, img, price, rating, lessons, total_students } = course;
    return (
        <div>
            <div className="flex gap-6 h-64 rounded-2xl shadow-xl hover:border-b-4 border-[#5680E9]">
                <div>
                    <figure className='h-64 w-52'><img className='h-full w-full rounded-l-2xl' src={img} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h3 className='text-2xl font-bold text-[#5680E9]'>${price}</h3>
                        <div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold my-4">{name}</h2>
                    <div className='flex gap-6'>
                        <div className='flex gap-2 text-xl items-center'>
                            <PiNotebookDuotone />
                            <h5>{lessons} Lesson</h5>
                        </div>
                        <div className='flex gap-2 text-xl items-center'>
                            <TbUser />
                            <h5>{total_students} Student</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseCart;
CourseCart.propTypes = {
    course: PropTypes.object
}
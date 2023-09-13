import PropTypes from 'prop-types'
import '../css/style.css'
import { FaBookmark } from 'react-icons/fa';
const Block = ({ blog, bookhendel, timehandelclick }) => {
    const { title, cover, posted_date, reading_time, img, author } = blog;
    return (
        <div className='mb-10 mt-10'>
            <img src={cover} alt="" />
            <div className='flex items-center justify-between'>
                <div className='mt flex'>
                    <img className='img mr-5' src={img} alt="" />
                    <div>
                        <h5 className='text-xl font-extrabold'>{author}</h5>
                        <p className='flex justify-start mt-2'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p>{reading_time} read</p>
                    <button onClick={() => bookhendel(blog)} ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='font-extrabold text-4xl flex justify-start mt-3'>{title}</h1>
            <p onClick={() => timehandelclick(reading_time)} className='mt-3 flex text-green-900 underline '><button>Mark as read</button></p>
        </div>
    );
};
Block.propTypes = {
    blog: PropTypes.object.isRequired,
    bookhendel: PropTypes.func.isRequired,
    timehandelclick: PropTypes.func.isRequired
}


export default Block;
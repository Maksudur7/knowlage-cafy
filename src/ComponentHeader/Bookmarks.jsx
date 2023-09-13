
import PropTypes from 'prop-types'
import Showbook from '../showsortbooks/Showbook';

const Bookmarks = ({ book, booklength,times }) => {
    console.log(typeof(times))
    return (
        <div className='mt-10 ml-5 py-5'>
            <h1 className='font-extrabold p-5 border-4 border-[#6047EC] text-[#6047EC] rounded-xl'>Spent time on read : {times} </h1>
            <div className="mt-10 bg-slate-200  py-5">
                <h2 className='font-extrabold'>book marks: {booklength} </h2>
                <Showbook title={book}></Showbook>
            </div>

        </div>
    );
};
Bookmarks.propTypes = {
    book: PropTypes.object.isRequired,
    booklength: PropTypes.object.isRequired,
    times: PropTypes.object.isRequired
}
export default Bookmarks;
import PropTypes from 'prop-types'
const Showbook = ({title}) => {
    // console.log(title.reading_time)
    return (
        <div>
            {
                title.map(elements => <h1 className='bg-gray-300 m-5 p-5 rounded font-bold text-lg' key={elements.id}>{elements.title}</h1>)
            }
        </div>
    );
};
Showbook.propTypes ={
    title: PropTypes.object.isRequired
}

export default Showbook;
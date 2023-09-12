import PropTypes from 'prop-types'

const Block = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};
Block.propTypes ={
    blog: PropTypes.object.isRequired
}


export default Block;
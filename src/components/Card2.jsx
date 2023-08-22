import PropTypes from 'prop-types';
import { Link as Anchor } from "react-router-dom"

const Card2 = ({_id, name, image, continent}) => {
    return (
        <div className='flex flex-col border rounded-md border-black border-opacity-50 hover:shadow-xl'>
            <img className='w-full h-auto rounded-md p-1' src={image} alt={name} />
            <h3 className='text-gray-600 my-1 mx-2'>{name}</h3>
            <h3 className='text-gray-600 my-1 mx-2'>{continent}</h3>
            <Anchor className="bg-gradient-to-r from-purple-500 bg-purple-400 text-sm shadow-sm text-center font-medium tracking-wider  text-white rounded-md hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700 m-2 p-0.5" key={_id} to={`/cities/${_id}`}>Details
            </Anchor>
        </div>
    )
}

Card2.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card2
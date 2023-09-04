import PropTypes from 'prop-types';
import { Link as Anchor } from "react-router-dom"

const Card2 = ({name, country, image, description, _id}) => {
    return (
        <div className='flex flex-col border rounded-md border-black border-opacity-50 hover:shadow-xl'>
            <img className='w-full h-auto rounded-md p-1' src={image} alt={name} />
            <h2 className='text-center font-bold text-gray-600 my-1 mx-2'>{name}</h2>
            <h2 className='text-center font-bold text-gray-600 my-1 mx-2'>{country}</h2>
            <h3 className='text-center font-bold text-gray-600 my-1 mx-2'>{description}</h3>
            <Anchor className="text-sm bg-black shadow-sm text-center font-medium tracking-wider text-white rounded-md m-2 p-0.5" key={_id} to={`/cities/${_id}`}>Details
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
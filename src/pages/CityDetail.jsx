
import { useParams, Link as Anchor } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import ItinerariesList from '../components/ItinerariesList';

const CityDetail = () => {

    let { _id } = useParams()

    const [cities, setCities] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:7000/api/cities/${_id}`)
            .then(response => {
                setCities(response.data.city);
            })
            .catch(error => console.error('Error fetching city data:', error));
    }, [_id]);

    return (
        <main>
            <section className='details h-full flex flex-col'>
                <div className="flex flex-col my-2 h-full w-full mt:flex-row">
                <div className='h-2/4 mt:h-auto mt:flex mt:flex-col mt:items-center mt:justify-center mt:w-1/2 mt:px-24 px-6 py-8 bg-gray-400'>
                <h3 className="text-4xl font-medium text-gray-900 text-center">
                    {cities?.name}, {cities?.country}
                </h3>
                <br />
                <p className='text-gray-900 text-xl'>{cities?.description}</p>
                </div>
                <img src={cities?.image} alt={cities?.name} className='h-[60rem] w-[auto] mt:w-1/2 pt-6 object-cover bg-center' />
                </div>
            </section>
            <ItinerariesList cityId={cities?._id} />
            <Anchor to='/cities' className='flex flex-col items-center bg-gray-700 shadow-sm font-semibold text-3xl md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-black border-2 border-opacity-50 border-white pt-1.5 pb-2 px-3 my-4'> Go back to cities </Anchor>
        </main>
    );
}

export default CityDetail
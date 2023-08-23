import { useParams, Link as Anchor } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";


const CityDetail = () => {

    let { id } = useParams()

    const [cities, setCities] = useState();

    useEffect(() => {
        axios.get(`http://localhost:7000/api/cities/${id}`)
            .then(response => setCities(response.data.cities))
            .catch(err => { console.log(err) })
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-purple-50 mt-12">
            {<img src={cities?.image} alt={cities?.name} />}

            <div className='h-72 bg-cover bg-center bg-no-repeat flex justify-center items-center'>
                <div className='absolute h-full flex justify-center items-center text-white text-center font-semibold text-5xl md:text-7xl lg:text-8xl text-shadow'>{cities?.name}
                </div>
            </div>

            <Anchor to='/cities' className='bg-purple-700 shadow-sm font-semibold text-base md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white pt-1.5 pb-2 px-3 my-4'> Go back </Anchor>
        </div>
    )
}

export default CityDetail
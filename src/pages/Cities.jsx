import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../store/actions/cityActions';
import Card2 from "../components/Card2"
import NotFoundPage from "./NotFoundPage"

const Cities = () => {
    const cities = useSelector((store) => store.cityReducer.cities)

    const dispatch = useDispatch();

    let inputSearch = useRef();

    useEffect(() => {
        dispatch(get_cities())
    }, [dispatch]);

    const handleInputSearch = () => {
        dispatch(filter_cities({ name: inputSearch.current.value }));
    };

    const handleResetCities = () => {
        if(inputSearch.current.value === ""){
        dispatch(get_cities());}
    }

    return (
        <>
            <div className="flex items-center justify-center my-4">
                <div className="flex items-center max-w-md mx-auto bg-white border border-gray-300 rounded-lg">
                    <div className="w-full">
                        <input
                            type="search"
                            className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                            placeholder="Search..."
                            onChange={handleResetCities}
                            name='input-search' ref={inputSearch}
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleInputSearch}
                            type="submit"
                            className='flex items-center justify-center w-8 h-8'> <img src="https://cdn-icons-png.flaticon.com/512/3721/3721746.png" alt="Search" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">

                {
                    cities?.length > 0
                    ? cities?.map((city) => (
                            <Card2 key={city._id} _id={city._id} name={city.name} image={city.image}/>
                    )).slice(0, 15)
                    : <NotFoundPage />
                }
            </div>
        </>
    )
}

export default Cities;
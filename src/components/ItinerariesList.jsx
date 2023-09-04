import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_itineraries } from '../store/actions/itiniraryActions';
import Itinerary from '../components/Itinerary';

function ItinerariesList({ cityId }) {
    const itineraries = useSelector((store) => store.itineraryReducer.itineraries);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_itineraries());
    }, [dispatch]);

    const filteredItineraries = itineraries.filter(itinerary => itinerary.city === cityId);

    return (
        <div>
            {filteredItineraries.length > 0 ? (
                filteredItineraries.map(itinerary => (
                    <Itinerary
                        key={itinerary._id}
                        title={itinerary.title}
                        name={itinerary.user.name}
                        photo={itinerary.user.photo}
                        duration={itinerary.duration}
                        likes={itinerary.likes}
                        price={itinerary.price}
                        hashtags={itinerary.hashtags}
                    />
                ))
            ) : (
                <p className='h-screen flex flex-wrap justify-center items-center content-start gap-2 text-3xl pt-8 animate-pulse text-indigo-950'>
                    No itineraries available for this city yet 😢
                </p>
            )}
        </div>
    );
}

export default ItinerariesList;

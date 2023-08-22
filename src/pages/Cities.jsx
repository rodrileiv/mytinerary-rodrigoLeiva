import React, { useEffect, useState } from "react"
import axios from "axios"
import Card2 from "../components/Card2"
import NotFoundPage from "./NotFoundPage"

const Cities = () => {
    const [cities,setCities]=useState()

    useEffect(()=> {
        axios.get('http://localhost:7000/api/cities')
        .then(response => setCities(response.data.cities))
        .catch(err=>console.log(err))
    }, [])

    const handleInputChange=async(city)=>{
        try {
            await axios.get(`http://localhost:7000/api/cities?name=${city.target.value}`)
            .then((res)=>setCities(res.data.cities))
        } catch (error) {
            console.log(error);
            setCities([]);
        }
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
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className='flex items-center justify-center w-8 h-8 text-white rounded-r-lg bg-gradient-to-r from-purple-500 bg-purple-400 hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700'>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">

                {
                    cities?.length > 0
                    ? cities?.map((city) => (
                            <Card2 key={city._id} _id={city._id} name={city.name} image={city.image} continent={city.continent}/>
                    )).slice(0, 15)
                    : <NotFoundPage />
                }
            </div>
        </>
    )
}

export default Cities
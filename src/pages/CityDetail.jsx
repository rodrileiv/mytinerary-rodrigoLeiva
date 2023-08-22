import { useEffect } from "react";
import { useParams } from "react-router-dom"


const CityDetail = () => {
    const { _id } = useParams(); // ID de mi evento
    // Tener una variable de estado para almacenar la info de mi evento

    useEffect(() => {
        // Peticion axios para traerme la info de UN SOLO EVENTO
        // Utilizar el ID del use params para hacer esa peticion
    }, [])


    // Utilizar esa variable de estado para renderizar la info
    return (
        <div>
            <h2 className='text-3xl text-center'>Detail from City: {_id}</h2>
        </div>
    )
}

export default CityDetail;
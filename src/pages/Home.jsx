import Carousel from "../components/Carousel";
import {Link as Anchor} from "react-router-dom";

export default function Home() {
    return ( 
        <main className="flex grow justify-center mt-2">
            <div className="flex flex-col items-center  
                md:flex-row 
            ">
                <div className="flex flex-col p-4 items-center md:items-start">
                    <h1 className="text-[42px] pe-20">Find the perfect destination</h1>
                    <p className="text-[18px] text-justify text-gray-500 py-4 pr-5 w-[50vh] md:w-[80vh]">Find your perfect trip, designed by insiders who know and love their cities</p>
                    <Anchor to='/pages/cities'>
                        <button className="bg-[#4F46E5] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center">
                            <p className='px-5 shadow-lg shadow-indigo-500/50'>See More</p>
                        </button>
                    </Anchor>
                </div>
                <Carousel />
            </div>
        </main>
    )
}
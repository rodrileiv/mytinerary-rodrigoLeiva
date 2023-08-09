import Carousel from "../components/Carousel";
import {Link as Anchor} from "react-router-dom";

export default function Home() {
    return ( 
        <main className="grow flex justify-center mt-[20px]">
            <div className="flex justify-center items-center 
                md:flex flex-row 
            ">
                <div className="p-4">
                    <h1 className="text-[42px] pe-20">Find the perfect destination</h1>
                    <p className="text-[20px] text-justify text-black py-4 pr-10 w-[80vh]">Find your perfect trip, designed by insiders who know and love their cities</p>
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
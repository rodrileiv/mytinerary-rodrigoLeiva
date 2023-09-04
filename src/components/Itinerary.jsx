import { Disclosure } from '@headlessui/react'
import { AiFillLike } from "react-icons/ai";

function Itinerary({ title, name, photo, duration, likes, price, hashtags, comments }) {

    return (
        <section className='itinerary w-full h-full'>
            <div className='bg-gray-500 pb-6 my-4'>

                <h3 className='text-2xl font-medium text-white py-4 text-center bg-gray-400'>{title}</h3>
                <div className='flex flex-col-reverse justify-around items-center smd:flex-row my-6'>
                    <div className='flex flex-col text-white place-items-center my-4 w-1/4'>
                        <p className='flex flex-row gap-1'>Price: <span className='flex flex-row gap-1'>{price} <img className='h-[25px]' src="https://www.svgrepo.com/show/592/money.svg" alt="money bill" /></span></p>
                        <p>Duration: <span>{duration}</span> Hours</p>
                    </div>
                    <div className='flex flex-col place-items-center text-white my-4 w-1/4'>
                        <img className='rounded-full w-40 h-40 mx-auto object-cover object-center' src={photo} alt={name} />
                        <h4 className='text-xl text-center mt-4 font-medium'>{name}</h4>
                    </div>
                    <div className='flex flex-col place-items-center text-white my-4 w-1/4'>
                        <span className='flex flex-row gap-1 align-middle font-semibold'>{likes} <AiFillLike/></span>

                        <div className='flex flex-wrap gap-x-3 text-justify'>
                                <p>
                                    {hashtags}
                                </p>
                        </div>
                    </div>
                </div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Panel>
                                <div className='activities rounded-none' id='activities'>
                                    <h3 className='text-2xl font-medium text-white py-4 text-center bg-gray-400'>Activities</h3>
                                    <div className='flex flex-col justify-around items-center smd:flex-row my-6'>
                                        <div className='flex flex-row items-center mt-2'>
                                            <p className="my-4 italic text-base text-white">
                                                Under construction...
                                            </p>
                                            <img className="w-6 h-6 mx-2 animate-beat" src="https://freesvg.org/img/dchandlr_dchandlr_work.png.png" alt="Under construction" />
                                        </div>
                                    </div>
                                </div>
                                <div className='comments rounded-none'>
                                    <h3 className='text-2xl font-medium text-white py-4 text-center bg-gray-400'>Comments</h3>
                                    <div className='flex flex-col justify-around items-center smd:flex-row my-6'>
                                        <div className='flex flex-row items-center mt-2'>
                                            <p className="my-4 italic text-base text-white">
                                                Under construction...
                                            </p>
                                            <img className="w-6 h-6 mx-2 animate-beat" src="https://freesvg.org/img/dchandlr_dchandlr_work.png.png" alt="Under construction" />
                                        </div>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                            <Disclosure.Button className="flex justify-center mt-4 mx-auto items-center rounded-lg bg-black px-4 py-2 text-center text-base font-medium  hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span className='text-white font-medium hover:transition-transform hover:scale-[1.05]'><a href="#activities">{
                                    open ? 'View less' : 'View more'
                                } </a> </span>
                            </Disclosure.Button>
                        </>
                    )}
                </Disclosure>

            </div>
        </section>
    )
}

export default Itinerary
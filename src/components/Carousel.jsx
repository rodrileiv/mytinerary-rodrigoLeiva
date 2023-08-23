import React, { useState, useEffect } from 'react'

const Carousel = () => {
    let [index,setIndex]=useState(0);

    const images1=[
        {
            name:'Cancun',
            src:'/img/america/cancun.jpg',
        },
        {
            name:'Cartagena',
            src:'/img/america/cartagena.jpg',
        },
        {
            name:'Ushuaia',
            src:'/img/america/ushuaia.jpg',
        }
    ]
    const images2=[
        {
            name:'Bangkok',
            src:'/img/asia/bangkok.jpg',
        },
        {
            name:'Pekin',
            src:'/img/asia/pekin.jpg',
        },
        {
            name:'Tokio',
            src:'/img/asia/tokio.jpg',
        }
    ]
    const images3=[
        {
            name:'Rome',
            src:'/img/europe/roma.jpg',
        },
        {
            name:'Rio Do Janeiro',
            src:'/img/america/rioDeJaneiro.jpg',
        },
        {
            name:'London',
            src:'/img/europe/london.jpg',
        }
    ]
    const images4=[
        {
            name:'Sidney',
            src:'/img/oceania/sidney.jpg'
        },
        {
            name:'Paris',
            src:'/img/europe/paris.jpg'
        },
        {
            name:'Suva',
            src:'/img/oceania/suva.jpg'
        }
    ]

    const handlePrev=()=>{
        if (index>0){
            setIndex(index-1)
        }
        if (index==0){
            setIndex(2)
        }
    }

    const handleNext=()=>{
        if (index<2){
            setIndex(index+1)
        }
        if (index==2){
            setIndex(0)
        }
    }

    const autoSlide = () => {
        handleNext();
    };

    useEffect(() => {
        const interval = setInterval(autoSlide, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [index]);

    return (
        <div id="carouselExample" className="carousel slide">
            <h2 className='text-center font-bold text-4xl'>My Tineraries</h2>
            <div className='flex'>
                <button className="text center font-bold justify-content-center text-3xl" onClick={handlePrev}><img src="https://cdn-icons-png.flaticon.com/128/54/54623.png" alt="Left" /></button>
                <div className="carousel-inner">
                    <div className="flex flex-wrap justify-center">
                        <div className="city-info text-center p-4 m-4">
                            <h3>{images1[index].name}</h3>
                            <img src={images1[index].src} alt="" className='city rounded w-80' />
                        </div>
                        <div className="city-info text-center p-4 m-4">
                            <h3>{images2[index].name}</h3>
                            <img src={images2[index].src} alt="" className='city rounded w-80' />
                        </div>
                        <div className="city-info text-center p-4 m-4">
                            <h3>{images3[index].name}</h3>
                            <img src={images3[index].src} alt="" className='city rounded w-80' />
                        </div>
                        <div className="city-info text-center p-4 m-4">
                            <h3>{images4[index].name}</h3>
                            <img src={images4[index].src} alt="" className='city rounded w-80' />
                        </div>
                    </div>
                </div>
                <button className="text-center font-bold justify-center text-3xl" onClick={handleNext}><img src="https://cdn-icons-png.flaticon.com/128/54/54240.png" alt="Right" /></button>
            </div>
        </div>
    )
}

export default Carousel

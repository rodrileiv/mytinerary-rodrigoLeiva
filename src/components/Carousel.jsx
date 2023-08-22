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
        <div id="carouselExample" className="carousel slide carusel">
            <h2 className='text-center font-bold'>My Tineraries</h2>
            <div className='d-flex'>
                <button onClick={handlePrev} className="boton carousel-control-prev-icon align-self-center"></button>
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center flex-wrap">
                        <div className="city-info text-center">
                            <h3>{images1[index].name}</h3>
                            <img src={images1[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info text-center">
                            <h3>{images2[index].name}</h3>
                            <img src={images2[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info text-center">
                            <h3>{images3[index].name}</h3>
                            <img src={images3[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info text-center">
                            <h3>{images4[index].name}</h3>
                            <img src={images4[index].src} alt="" className='city rounded' />
                        </div>
                    </div>
                </div>
                <button onClick={handleNext} className="boton carousel-control-next-icon align-self-center"></button>
            </div>
        </div>
    )
}

export default Carousel

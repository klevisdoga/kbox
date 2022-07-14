import React, { useState, useEffect } from 'react'
import './PageHero.scss';
import { HeroImages, HeroImagesDesktop } from './HeroData';

export default function PageHero() {
    const [current, setCurrent] = useState(0)

    const prevImage = () => {
        setCurrent(current === 0 ? HeroImages.length - 1 : current - 1)
    }

    const nextImage = () => {
        setCurrent(current === HeroImages.length - 1 ? 0 : current + 1)
    }

    useEffect(() => {
        setTimeout(() => {
            setCurrent(current === HeroImages.length - 1 ? 0 : current + 1 )
    
        }, 6000 )
    }, [current]);
    

    return (
        <>
        <div className='hero'>
            <div className='hero__button-left' onClick={prevImage}><span>^</span></div>
            <div className='hero__button-right' onClick={nextImage}><span>^</span></div>
            {HeroImages.map((image, index) => {
                return (
                    <div key={index} className={index === current ? 'hero__poster--active' : 'hero__poster'}>
                        {index === current && (<img src={image.image} alt={image.alt} className='hero__image' />)}
                        {index === current &&
                            (
                                <div className='hero__text' >
                                    <h1 className='hero__text-title'>{image.h1}</h1>
                                    <p className='hero__text-subtitle'>{image.p}</p>
                                    <div className='hero__text-button-container'>
                                        <button className='hero__text-button'>{image.button}</button>
                                    </div>
                                </div>
                            )}

                    </div>
                )
            })}
            
            
        </div>
        <div className='hero__desktop'>
            <div className='hero__button-left' onClick={prevImage}><span>^</span></div>
            <div className='hero__button-right' onClick={nextImage}><span>^</span></div>
            {HeroImagesDesktop.map((image, index) => {
                return (
                    <div key={index} className={index === current ? 'hero__poster--active' : 'hero__poster'}>
                        {index === current && (<img src={image.image} alt={image.alt} className='hero__image' />)}
                        {index === current &&
                            (
                                <div className='hero__text' >
                                    <h1 className='hero__text-title'>{image.h1}</h1>
                                    <p className='hero__text-subtitle'>{image.p}</p>
                                    <div className='hero__text-button-container'>
                                        <button className='hero__text-button'>{image.button}</button>
                                    </div>
                                </div>
                            )}

                    </div>
                )
            })}
            
            
        </div>
        </>
    )
}

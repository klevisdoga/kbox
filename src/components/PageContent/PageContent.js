import React, { useRef } from 'react';
import './PageContent.scss';
import { MainOptions, MainContentCards, MainContentCardsDesktop } from './PageContentData';

const PageContent = () => {

    const ref = useRef()
    return (
        <div className='main'>
            <div className='main__options'>
                {MainOptions.map(item => {
                    return (
                        <div className='main__options-container'>
                            <img src={item.image} alt={item.alt} className='main__options-image' />
                            <span className='main__options-title'>{item.title}</span>
                        </div>
                    )
                })}
            </div>
            <div className='main__cards'>
                {MainContentCards.map(card => {
                    return (
                        <div className={`main__cards-card ${card.cardClass ? card.cardClass : ''}`}>
                            <img src={card.image} alt={card.alt} className='main__cards-card-image' />
                            <div className={`main__cards-card-text ${card.class}`}>
                                <h2 className={card.titleClass}>{card.h2}</h2>
                                {card.span ? <span className='main__cards-card-text--white--span'>{card.span}</span> : ''}
                                <p>{card.p}</p>
                                {card.p2 ? <p className='main__cards-card--p2'>{card.p2}</p> : ''}
                                <div className={`main__cards-card-button-container ${card.buttonClass ? 'hero__text-button-container' : ''}`}>
                                    <button className={card.buttonClass ? 'hero__text-button' : 'main__cards-card-button'}>{card.button}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='main__cards--desktop'>
                {MainContentCardsDesktop.map(card => {
                    return (
                        <div className={`main__cards-card ${card.cardClass ? card.cardClass : ''}`}>
                            <img src={card.image} alt={card.alt} className='main__cards-card-image' />
                            <div className={`main__cards-card-text ${card.class}`}>
                                <h2 className={card.titleClass}>{card.h2}</h2>
                                {card.span ? <span className='main__cards-card-text--white--span'>{card.span}</span> : ''}
                                <p>{card.p}</p>
                                {card.p2 ? <p className='main__cards-card--p2'>{card.p2}</p> : ''}
                                <div className={`main__cards-card-button-container ${card.buttonClass ? 'hero__text-button-container' : ''}`}>
                                    <button className={card.buttonClass ? 'hero__text-button' : 'main__cards-card-button'}>{card.button}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PageContent

import React from 'react';
import './PageNav.scss';
import burger from '../../assets/icons/clipart3030668.png'
import search from '../../assets/icons/search-nav.svg'

export default function PageNav() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <img src={burger} alt='burger icon' className='header__nav-burger' />
            </nav>
            <div className='header__actions'>
                <img src={search} alt='search icon' className='header__search' />
                <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' alt='microsoft' className='header__logo' />
                <img src={'https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'} alt='shopping cart icon' className='header__cart' />
                <span>Sign in</span>

            </div>
        </header>

    )
}

import React, { useState } from 'react';
import './PageNav.scss';
import burger from '../../assets/icons/clipart3030668.png'
import search from '../../assets/icons/search-nav.svg'
import close from '../../assets/icons/105-1059065_cross-thin-comments-close-icon-svg-thin.png'

export default function PageNav() {

    const [openNav, setOpenNav] = useState(false)

    const handleOpenNav = () => {
        setOpenNav(true)
    }

    const handleCloseNav = () => {
        setOpenNav(false)
    }

    if (openNav) {
        return (
            <>
                <header className='header'>
                    <nav className='header__nav'>
                        <img onClick={handleCloseNav} src={close} alt='burger icon' className='header__nav-burger--close' />
                    </nav>
                    <div className='header__actions'>
                        <img src={search} alt='search icon' className='header__search' />
                        <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' alt='microsoft' className='header__logo' />
                        <div className='header__actions-aside'>
                            <img src={'https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'} alt='shopping cart icon' className='header__cart' />
                            <span>Sign in</span>
                        </div>

                    </div>
                </header>
                <ul className='header__nav-open'>
                    <li className='header__nav-listitem'>Microsoft 365</li>
                    <li className='header__nav-listitem'>Office</li>
                    <li className='header__nav-listitem'>Windows</li>
                    <li className='header__nav-listitem'>Surface</li>
                    <li className='header__nav-listitem'>Xbox</li>
                    <li className='header__nav-listitem'>Deals</li>
                    <li className='header__nav-listitem'>Support</li>
                    <li className='header__nav-listitem'>Software</li>
                    <li className='header__nav-listitem'>PCs & Devices</li>
                    <li className='header__nav-listitem'>Entertainment</li>
                    <li className='header__nav-listitem'>Business</li>
                    <li className='header__nav-listitem'>Developer & IT</li>
                    <li className='header__nav-listitem'>Other</li>
                    <li className='header__nav-listitem'>View Sitemap</li>
                </ul>
            </>
        )
    }

    else if (!openNav) {
        return (
            <>
                {/* MOBILE / TABLET ONLY */}
                <header className='header'>
                    <nav className='header__nav'>
                        <img onClick={handleOpenNav} src={burger} alt='burger icon' className='header__nav-burger' />
                    </nav>
                    <div className='header__actions'>
                        <img src={search} alt='search icon' className='header__search' />
                        <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' alt='microsoft' className='header__logo' />
                        <div className='header__actions-aside'>
                            <img src={'https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'} alt='shopping cart icon' className='header__cart' />
                            <span>Sign in</span>
                        </div>

                    </div>
                </header>

                {/* DESKTOP ONLY */}
                <header className='header--desktop'>
                    <nav className='header__nav'>
                        <img onClick={handleOpenNav} src={burger} alt='burger icon' className='header__nav-burger' />
                    </nav>
                    <div className='header__actions'>
                        <div className='header__actions--extended'>
                            <h2 className='header__actions--extended-pipe'>|</h2>
                            <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e' alt='xbox logo' className='header__actions--extended-logo' />
                            <ul className='header__actions--extended-list'>
                                <li className='header__actions--extended-listitem'>Game Pass</li>
                                <li className='header__actions--extended-listitem'>Games</li>
                                <li className='header__actions--extended-listitem'>Devices</li>
                                <li className='header__actions--extended-listitem'>Play</li>
                                <li className='header__actions--extended-listitem'>Comunnity</li>
                                <li className='header__actions--extended-listitem'>Support</li>
                                <li className='header__actions--extended-listitem'>More</li>
                            </ul>
                        </div>
                        <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' alt='microsoft' className='header__logo' />
                        <div className='header__actions-aside'>
                            <span className='header__actions-aside--all'>All Macrosoft</span>
                            <img src={search} alt='search icon' className='header__search' />
                            <img src={'https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'} alt='shopping cart icon' className='header__cart' />
                            <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='%23707070'%3E%3Cg class='mectrl_stroke' stroke-width='1.9' fill='none'%3E%3Ccircle cx='32' cy='32' r='30.25'/%3E%3Cg transform='matrix(1.1 0 0 1.1 8.8 5.61)'%3E%3Ccircle class='mectrl_stroke' cx='20' cy='16' r='7'/%3E%3Cpath class='mectrl_stroke' d='M30 35h10m-5-5v10M30.833 32.09A11 11 0 009 34'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt='user profile sign in logo' className='header__signin'/>
                        </div>

                    </div>
                </header>
            </>

        )
    }
}

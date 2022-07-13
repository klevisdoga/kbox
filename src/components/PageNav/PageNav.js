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
                        <img src={'https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'} alt='shopping cart icon' className='header__cart' />
                        <span>Sign in</span>

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
            <header className='header'>
                <nav className='header__nav'>
                    {openNav
                        ? <img onClick={handleCloseNav} src={close} alt='burger icon' className='header__nav-burger--close' />
                        : <img onClick={handleOpenNav} src={burger} alt='burger icon' className='header__nav-burger' />
                    }
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
}

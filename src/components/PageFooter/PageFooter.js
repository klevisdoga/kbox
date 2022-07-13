import React from 'react';
import './PageFooter.scss';

const PageFooter = () => {
    return (
        <div className='footer'>
            <div className='footer__nav'>
                <div className='footer__nav-group'>
                    <h4>Browse</h4>
                    <ul>
                        <li>Kbox consoles</li>
                        <li>Kbox games</li>
                        <li>Kbox Game Pass</li>
                        <li>Kbox accessories</li>
                    </ul>
                </div>
                <div className='footer__nav-group'>
                    <h4>Resources</h4>
                    <ul>
                        <li>Kbox News</li>
                        <li>Kbox Support</li>
                        <li>Feedback</li>
                        <li>Community Standards</li>
                        <li> Photosensitive Seizure Warning</li>
                    </ul>
                </div>
                <div className='footer__nav-group'>
                    <h4>Macrosoft Store</h4>
                    <ul>
                        <li>Macrosoft account</li>
                        <li>Macrosoft Store Support</li>
                        <li>Returns</li>
                        <li>Orders tracking</li>
                        <li>Store locations</li>
                    </ul>
                </div>
                <div className='footer__nav-group'>
                    <h4>For Developers</h4>
                    <ul>
                        <li>Games</li>
                        <li>ID@Kbox</li>
                        <li>Windows</li>
                        <li>Creators Program</li>
                        <li>Designed at Kbox</li>
                    </ul>
                </div>
            </div>
            <div className='footer__base'>
                <div className='footer__base-list'>
                    <span>Sitemap</span>
                    <span>Contact Macrosoft</span>
                    <span>Privacy</span>
                    <span>Terms of use</span>
                    <span>Trademarks</span>
                    <span>Third Party Notices</span>
                    <span>Safety & eco</span>
                    <span>About our ads</span>
                    <span>&copy; Macrosoft 2022</span>
                </div>
                <div className='footer__base-notice'>
                    <h3>THIS SITE IS A CLONE OF THE XBOX.COM LANDING PAGE. <br/><br/> ALL VISUAL CONTENT IS OWNED BY MICROSOFT.</h3>
                </div>

            </div>

        </div>
    )
}

export default PageFooter
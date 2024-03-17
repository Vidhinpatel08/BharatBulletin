import React from 'react';
import Arrow from './refe/arrow.png';
import { Link } from 'react-router-dom';

const ScrollTop = ({ handleScrollToTop }) => {


    return (
        <div className='Scroll-btn-div'>
            <Link onClick={handleScrollToTop}>
                <div className="Scroll-btn">
                    <img src={Arrow} alt="^" srcSet={Arrow} />
                </div>
            </Link>
        </div>
    );
};

export default ScrollTop;

import React from 'react'
import Loading from './refe/Loading.gif'

const Spinner = () => {
    return (
        <div className='text-center my-4 select-none'>
            <img src={Loading} alt="Loading..." />
        </div>
    )
}

export default Spinner

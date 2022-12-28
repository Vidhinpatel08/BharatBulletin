import React, { Component } from 'react'
import Loading from './Loading.gif'



export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-4'>
                <img src={Loading} alt="Loading..." />
            </div>
        )
    }
}

export default Spinner

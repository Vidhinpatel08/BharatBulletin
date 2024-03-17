import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg  bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <strong>BharatBulletin</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link>                                </li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/world">World</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/politics">Politics</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/finance">Finance</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/sport">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={props.handleScrollToTop} to="/tech">Technology</Link></li>
                        </ul>
                        <div className="box-lang">
                            {/* Selecting technologies */}
                            <select className="select-lang" placeholder="Technologies" aria-label="Technologies" value={props.language} onChange={props.changeLanguage} name="technologies" >
                                <option value='en'>English</option>
                                <option value='hi'>Hindi</option>
                                <option value='gu'>Gujarati</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar

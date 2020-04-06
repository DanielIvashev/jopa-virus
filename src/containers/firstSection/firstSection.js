import React from "react";
import '../style.scss'
import {Link} from "react-scroll";


function FirstSection() {
    return (
        <div className="container-fluid firstSectionWrapper">
            <div className='stage'>
                <Link
                    to='stats'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                >
                    <h1 className='box bounce' style={{cursor: 'pointer'}}>
                        CORONAVIRUS<br/>
                        <p><i className="arrow down bounce"/></p>
                    </h1>
                </Link>
            </div>
        </div>
    )
}


export default FirstSection
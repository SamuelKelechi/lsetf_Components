import Reac from 'react'
import Africa from "./africa.svg";
import "./Header.css" 

function Header () {
    return (
        <>
        <div className="header">
            <img src={Africa} className='africa'/>
            <div className="navs">
                <p>Find Job</p>
                <p>Coaching</p>
                <p>Sign In</p>
                <button className='b1'>For Employers</button>
            </div>
        </div>
        </>

    )
}
export default Header
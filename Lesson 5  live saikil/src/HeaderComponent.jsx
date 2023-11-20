import {NavLink} from "react-router-dom";
import './App.css'

function HeaderComponent(){
    return(
        <header className="header">
            <nav>
                <ul className='headerAll'>
                    <li><NavLink id="homeID" activeclassname="active" to="/home">HOME</NavLink></li>
                    <li><NavLink id="aboutID" activeclassname="active" to="/about">ABOUT</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}
export default HeaderComponent;
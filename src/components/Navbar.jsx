import "./Navbar.css"
import { IoSpeedometerSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";




function Navbar(props)
{
    return <>
    <div className={props.dabba? "dark-navbar":"navbar"}>
        <h1 ><IoSpeedometerSharp />My Website</h1>
        <div className="nav-right">
            <p className="best-text"> Best Score: <span className="best-score">{props.best}</span></p>
            <button className="theme-toggle" onClick={props.changeTheme}>{props.dabba? <MdDarkMode />:<IoSunnyOutline />}</button>
        </div>
    </div>
    </>
}
export  default Navbar;
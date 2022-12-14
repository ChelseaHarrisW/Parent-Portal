import { Link } from 'react-router-dom'

//styles and images
import './Navbar.css'
import temple from '../assets/temple.svg'

export default function Navbar() {
    return(
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={temple} alt=" dojo logo"/>
                    <span> Parent Portal</span>
                </li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li>
                    <button className="btn">Logout</button>
                </li>
                
            </ul>
        </div>
    )
}
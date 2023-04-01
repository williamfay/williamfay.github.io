import '../styles/module.nav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav)
    };
    return (
        <>
        <nav class="main_nav">
            <ul class="nav_ul">
                <li class="nav_item"><Link to='/'>Home</Link></li>
                <li class="nav_item"><Link to='/about'>About Me</Link></li>
                <li class="nav_item"><Link to='/projects'>Projects</Link></li>
                <li class="nav_item"><Link to='/history'>Work History</Link></li>
            </ul>
      </nav>
      </>
    )
}

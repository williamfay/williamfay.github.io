import './App.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/hobbies'>Hobbies & Interests</Link></li>
                <li><Link to='/history'>Work History</Link></li>
            </ul>
      </nav>
    )
}

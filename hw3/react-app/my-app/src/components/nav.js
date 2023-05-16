import { Route, Routes, Link } from 'react-router-dom';
import './styles.css';


import Home from './home';
import Search from './search';
import Houses from './houses';

export default function Nav() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar">
                    <li className="nav-link mx-3 p-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link mx-3 p-2">
                        <Link to="/search">Search</Link>
                    </li>
                    <li className="nav-link mx-3 p-2">
                        <Link to="/houses">Houses</Link>
                    </li>
                </ul>
            </nav> 
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/search" element={<Search />}>                    
                </Route>
                <Route path="/houses" element={<Houses />}>                    
                </Route>
            </Routes>
        </div>
    );
}

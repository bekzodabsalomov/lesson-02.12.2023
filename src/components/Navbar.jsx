import useLogout from '../hooks/useLogout';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalContext } from './../hooks/useGlobalContext';

function Navbar() {
    const { user } = useGlobalContext();
    const { logout, error } = useLogout();

    if (error) {
        alert("Log out error");
    }

    return (
        <div className='flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500 p-4 nav'>
            <Link to="/" className='text-4xl text-white font-semibold'>My App</Link>
            <nav className='flex items-center gap-6'>
                <NavLink to="/" className='text-white hover:text-gray-300 transition duration-300'>Home</NavLink>
                <span className='text-white'>|</span>
                <NavLink to="/about" className='text-white hover:text-gray-300 transition duration-300'>About</NavLink>
                <span className='text-white'>|</span>
                <NavLink to="/contact" className='text-white hover:text-gray-300 transition duration-300'>Contact</NavLink>
            </nav>
            <div className='flex items-center gap-6'>
                <p className='text-sm text-white bg-gray-800 px-3 py-1 rounded'>WELCOME <span className='font-bold text-1xl'>{user.displayName}</span>!</p>
                <button onClick={logout} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded text-sm transition duration-300">Sign Out</button>
            </div>
        </div>
    );
}

export default Navbar;
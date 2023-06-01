import logo from '../../assets/movie.png'
import { Link } from 'react-router-dom';
import {BiSearchAlt2, BiStar} from 'react-icons/bi'
import { IconContext } from 'react-icons';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav id="navbar">
            <h3>
                <Link to='/'>
                    <img src={logo} className="logo"/>
                    My Movies
                </Link>
            </h3>
            <form>
                <input type="text" placeholder='Pesquise um filme aqui!'/>
                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
            </form>
            <div className='nav-links'>
                <IconContext.Provider value={{ size: '24px', color:'rgb(255, 255, 255, 0.87)'}}>
                    <Link to='/favorits'> 
                        <BiStar/>
                    </Link>
                </IconContext.Provider>
            </div>
        </nav>
    );
}

export default NavBar;
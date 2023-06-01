import logo from '../../assets/movie.png'
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {BiSearchAlt2, BiStar} from 'react-icons/bi'
import { IconContext } from 'react-icons';
import './NavBar.css';

const NavBar = () => {

    const[search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search){
            return
        }
        navigate(`/search?q=${search}`)
    }

    return (
        <nav id="navbar">
            <h3>
                <Link to='/'>
                    <img src={logo} className="logo"/>
                    My Movies
                </Link>
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Pesquise um filme aqui!' onChange={(e) => setSearch(e.target.value)} value={search}/>
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
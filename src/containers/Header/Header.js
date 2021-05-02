import { Link , NavLink} from 'react-router-dom';
import {useState} from 'react'

import './Header.scss'

const Header = ({sidebarState, setSidebarState}) => {
  
     const [menu, setmenu] = useState(false);

    return (
        <div className="header">
            <div className="containers">
                <button onClick={() => setSidebarState(!sidebarState)}>menu</button>
                <NavLink className='header-link' activeClassName="isActive" exact to="/">Top movies</NavLink>
                {/* <Link to="/" onClick={() => setmenu('top')} className={`header-link ${menu == 'top' ? 'isAcive' : ''}`}>Top movies</Link> */}
                <NavLink className='header-link' activeClassName="isActive" exact to="/populars">Popular Movies</NavLink>
                {/* <Link onClick={() => setmenu("popular")} className={`header-link ${menu == "popular" ? 'isActive' : ''}`} to="/populars">Popular Movies</Link> */}
                <NavLink className='header-link' activeClassName="isActive" exact to="/movies">Movies</NavLink>  
                {/* <Link  onClick={() => setmenu("headerLink")} className={`header-link ${menu ==  "headerLink" ? 'isActive' : ''}`} to="/movies">Movies</Link>   */}

            </div> 
            
            
        </div>
    )
}

export default Header;
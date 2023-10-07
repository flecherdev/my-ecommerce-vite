import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = 'underline underline-offset-8';
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3"> 
        <li className="font-semibold text-lg">
          <NavLink 
            to={'/'}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/all'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/clothes'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >  
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/electronics'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Electronicts
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/furnitures'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/toys'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/others'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black-600">
          ezequiel.freire@shopi.com
        </li>
        <li>
          <NavLink 
            to={'/order'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Order
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/acount'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Acount
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/sign-in'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛒
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
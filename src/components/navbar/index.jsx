import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
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
            onClick={() => context.setSearchByCategory()}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/clothes'}
            onClick={() => context.setSearchByCategory('clothes')}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >  
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/electronics'}
            onClick={() => context.setSearchByCategory('electronics')}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Electronicts
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/furnitures'}
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/toys'}
            onClick={() => context.setSearchByCategory('toys')}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/others'}
            onClick={() => context.setSearchByCategory('others')}
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
            to={'/orders'}
            className={({isActive}) => isActive ? activeStyle : undefined}
          >
            Orders
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
        <li className="flex items-center">
          <ShoppingCartIcon className="w-6 h-6 text-white m-1" />
          <div>
            {context.count}  
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
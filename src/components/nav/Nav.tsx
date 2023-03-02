import { FC } from 'react';
import { NavLink } from '../nav-link/NavLink';

export const Nav: FC = () => (
  <nav className='flex items-center justify-between bg-primary'>
    <ul className='flex items-center m-0 p-2 bg-primary'>
      <li>
        <NavLink href='/'>Home</NavLink>
      </li>
      <li>
        <NavLink href='/movies'>Movies</NavLink>
      </li>
    </ul>
  </nav>
);

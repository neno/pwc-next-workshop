import { NavLink } from '@/components/nav-link/NavLink';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=''>
      <nav className='my-16'>
        <ul className='flex flex-wrap border-b border-gray-200'>
          <li className='mr-2'>
            <NavLink href='/movies'>Popular</NavLink>
          </li>
          <li className='mr-2'>
            <NavLink href='/movies/search'>Search</NavLink>
          </li>
          <li className='mr-2'>
            <NavLink href='/movies/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-8 flex flex-col gap-4'>{children}</div>
        <div className='col-span-4 bg-gray-300'></div>
      </div>
    </div>
  );
}

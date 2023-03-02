import { NavLink } from '@/components/nav-link/NavLink';
import { SelectedMovie } from '@/components/selected-movie/SelectedMovie';
import { TabLink } from '@/components/tab-link/TabLink';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=''>
      <nav className='mt-16'>
        <ul className='flex flex-wrap border-b border-gray-200'>
          <li className='mr-2'>
            <TabLink href='/movies'>Popular</TabLink>
          </li>
          <li className='mr-2'>
            <TabLink href='/movies/search'>Search</TabLink>
          </li>
          <li className='mr-2'>
            <TabLink href='/movies/favorites'>Favorites</TabLink>
          </li>
        </ul>
      </nav>
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-8 flex flex-col gap-4'>{children}</div>
        <div className='col-span-4'>
          <SelectedMovie />
        </div>
      </div>
    </div>
  );
}

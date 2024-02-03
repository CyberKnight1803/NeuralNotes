import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="bg-[#00AEA6] p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            Neural Notes
          </Link>
          {user ? (
            <ul className="flex space-x-4 justify-between items-center">
              
              <li>
                <Link legacyBehavior href="/course">
                  <a className="text-white">Courses</a>
                </Link>
              </li>

              <li className='btnDark'>
                <Link legacyBehavior href="/api/auth/logout">
                  <a className="text-white">Logout</a>
                </Link>
              </li>

              <li className="userContainer text-white flex flex-col items-end justify-between">
                <span className='name'>{user.name}</span>
                <span className='nickname'>{user.nickname}</span>
              </li>
            </ul>
          ) : (
            <Link href="/api/auth/login" legacyBehavior>
              <a className="text-white">Login</a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

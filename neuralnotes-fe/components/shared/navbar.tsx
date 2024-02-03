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
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard" legacyBehavior>
                  <a className="text-white">
                    {user.name} ({user.nickname})
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/api/auth/logout">
                  <a className="text-white">Logout</a>
                </Link>
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

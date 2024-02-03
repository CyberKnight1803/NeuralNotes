import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#00AEA6] p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Neural Notes</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard" legacyBehavior>
                <a className="text-white">Tanisha Bisht</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

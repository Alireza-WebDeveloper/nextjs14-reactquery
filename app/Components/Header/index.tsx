import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap gap-2 p-2 bg-gray-200 capitalize font-semibold">
        <Link className="px-5 py-2.5 rounded-md hover:bg-gray-100 " href={'/'}>
          home
        </Link>
        <Link
          className="px-5 py-2.5 rounded-md hover:bg-gray-100  "
          href={'/about'}
        >
          about
        </Link>
      </div>
    </header>
  );
};

export default Header;

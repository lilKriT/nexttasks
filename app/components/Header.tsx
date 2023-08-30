import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center bg-gray-700">
      <nav className="container flex justify-between">
        <Link href={"/"} className="logo">
          Logo
        </Link>

        <menu className="flex gap-2">
          <li>
            <Link href={"/"} className="navLink">
              Cool
            </Link>
          </li>
          <li>
            <Link href={"/"} className="navLink">
              Awesome
            </Link>
          </li>
          <li>
            <Link href={"/"} className="navLink">
              Stylish
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

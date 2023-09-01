import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center">
      <nav className="mt-6 mx-4 mb-2 container flex justify-between items-center">
        <Link href={"/"} className="logo">
          Logo
        </Link>

        <menu className="flex gap-2">
          <li>
            <Link href={"/about"} className="navLink">
              Cool
            </Link>
          </li>
          <li>
            <Link href={"/"} className="navLink">
              Awesome
            </Link>
          </li>
          <li>
            <Link href={"/secrets"} className="navLink">
              Stylish
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

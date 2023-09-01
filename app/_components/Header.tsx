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
              About
            </Link>
          </li>

          <li>
            <Link href={"/secrets"} className="navLink">
              Secret?
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

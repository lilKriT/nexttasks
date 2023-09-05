"use client"; // Maybe move this to just log in / out buttons?
import { AuthProvider } from "@/src/context/provider";
import Link from "next/link";
import { useContext } from "react";

const logoutUser = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/users/logout`);
    const data = await res;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Header = () => {
  const context = useContext(AuthProvider);

  return (
    <header className="flex justify-center">
      <nav className="mt-6 mx-4 mb-2 container flex justify-between items-center">
        <Link href={"/"} className="logo">
          Logo
        </Link>

        {context.user && `Hello, ${context.user.login}`}

        <menu className="flex gap-2">
          <li>
            {/* Prefetch only works in production! */}
            <Link href={"/profile"} className="navLink" prefetch>
              Profile
            </Link>
          </li>
          <li>
            {/* Prefetch only works in production! */}
            <Link href={"/about"} className="navLink" prefetch>
              About
            </Link>
          </li>

          {/* TODO: Possibly move logout logic to a separate component? */}
          <li>
            {!context.user ? (
              <Link href={"/login"} className="btn btn--primary" prefetch>
                Log In
              </Link>
            ) : (
              <button
                onClick={async () => {
                  await logoutUser();
                  context.setUser(null);
                }}
                className="btn btn--primary"
              >{`Log out`}</button>
            )}
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

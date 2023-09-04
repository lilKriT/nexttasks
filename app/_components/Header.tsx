"use client"; // Maybe move this to just log in / out buttons?
import { AuthProvider } from "@/src/context/provider";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const context = useContext(AuthProvider);
  console.log("drawing header");

  return (
    <header className="flex justify-center">
      <nav className="mt-6 mx-4 mb-2 container flex justify-between items-center">
        <Link href={"/"} className="logo">
          Logo
        </Link>

        <menu className="flex gap-2">
          <li>
            {/* Prefetch only works in production! */}
            <Link href={"/about"} className="navLink" prefetch>
              About
            </Link>
          </li>

          <li>
            <Link href={"/secrets"} className="navLink" prefetch>
              Secret?
            </Link>
          </li>

          <li>
            {!context.user ? (
              <Link href={"/login"} className="navLink" prefetch>
                Log In
              </Link>
            ) : (
              <button className="navLink">{`Log out`}</button>
            )}
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

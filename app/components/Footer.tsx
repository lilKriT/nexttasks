import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center ">
      <div className="container">
        <h2>The best task list ever, until I make a new one.</h2>
        <p>
          created by <Link href={"/"}>lilKriT</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center ">
      <div className="my-8 mx-4 container text-center flex flex-col gap-2">
        <h2 className="text-lg">
          The best task list ever, until I make a new one.
        </h2>
        <p className="text-sm text-zinc-400">
          created by{" "}
          <Link href={"/"} className="link">
            lilKriT
          </Link>{" "}
          around 2023 or whatever I don't have a calendar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

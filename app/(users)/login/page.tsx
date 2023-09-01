import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container flex justify-center items-start">
        <form className="form my-8 py-8 flex flex-col gap-4 w-full max-w-2xl">
          <label className="formLabel">
            Username:
            <br />
            <input
              type="text"
              className="formInput w-full mt-2"
              placeholder="John"
            />
          </label>
          <label className="formLabel">
            Password:
            <br />
            <input
              type="password"
              className="formInput w-full mt-2"
              placeholder="somethingverysecure123!"
            />
          </label>
          <button className="btn btn--primary mt-4">Log In</button>
          <p className="text-center">
            You don't have an account yet?{" "}
            <Link href={"/register"} className="link">
              Create an account!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

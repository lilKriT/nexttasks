import Link from "next/link";

const Register = () => {
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
          {/* <label className="formLabel">
            Code:
            <br />
            <input
              type="password"
              className="formInput w-full mt-2"
              placeholder="123 maybe?"
            />
          </label> */}
          <button className="btn btn--primary mt-4 self-center">
            Register
          </button>
          <p className="text-center">
            You already have an account?{" "}
            <Link href={"/login"} className="link">
              Log in!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

// TODO: refactor into server action

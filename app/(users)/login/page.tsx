"use client";
import { AuthProvider } from "@/src/context/provider";
import IUser from "@/src/types/IUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const loginUser = async (
  e: React.FormEvent,
  { login, password }: { login: string; password: string }
) => {
  e.preventDefault();
  try {
    const res = await fetch(`http://localhost:3000/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    if (!res.ok) {
      return null;
    } else {
      const data = (await res.json()) as IUser;
      console.log("data: ", data);
      return data;
    }
  } catch (error) {
    console.log("Something wrong");
  }
};

const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthProvider);
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center">
      <div className="container flex justify-center items-start">
        <p>{context.user ? context.user.login : "No  user"}</p>
        <p>{context.test}</p>
        <form
          onSubmit={async (e) => {
            const user = await loginUser(e, { login, password });
            if (user) {
              context.setUser(user);
            }
            // router.refresh();
          }}
          className="form my-8 py-8 flex flex-col gap-4 w-full max-w-2xl"
        >
          <label className="formLabel">
            Username:
            <br />
            <input
              type="text"
              className="formInput w-full mt-2"
              placeholder="John"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <label className="formLabel">
            Password:
            <br />
            <input
              type="password"
              className="formInput w-full mt-2"
              placeholder="somethingverysecure123!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn btn--primary mt-4 self-center">Log In</button>
          <p className="text-center">
            You don&apos;t have an account yet?{" "}
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

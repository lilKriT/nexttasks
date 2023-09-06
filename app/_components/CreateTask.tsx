"use client";
import { AuthProvider } from "@/src/context/provider";
import { useRouter } from "next/navigation";
import { useContext, useRef, useState } from "react";

async function createTask(title: string, author: string, isPublic: boolean) {
  await fetch(`http://localhost:3000/api/v1/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, author, public: isPublic }),
  });
}

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const publicRef = useRef<HTMLInputElement>(null);

  const context = useContext(AuthProvider);

  return (
    <div className="flex justify-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          publicRef.current;
          if (!!context.user) {
            await createTask(
              title,
              context.user.id,
              publicRef.current?.checked || false
            );
          }
          setTitle("");
          router.refresh();
        }}
        className="form mt-8 flex items-center gap-4 w-full max-w-2xl"
      >
        <input
          type="text"
          className="formInput grow"
          placeholder="Be awesome"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <input
          type="checkbox"
          className="formCheck"
          ref={publicRef}
          onChange={(e) => {
            console.log("Checking");
            // router.refresh();
          }}
        />
        <button className="btn btn--primary">Add</button>
      </form>
    </div>
  );
};

export default CreateTask;

// TODO: refactor into server actions

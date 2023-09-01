"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function createTask(
  e: React.FormEvent,
  refresh: () => void,
  title: string
) {
  e.preventDefault();
  await fetch("http://localhost:3000/api/v1/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  refresh();
}

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => createTask(e, router.refresh, title)}
        className="form mt-8 flex gap-4 w-full max-w-2xl"
      >
        <input
          type="text"
          className="formInput grow"
          placeholder="Be awesome"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn--primary">Add</button>
      </form>
    </div>
  );
};

export default CreateTask;

// TODO: refactor into server actions

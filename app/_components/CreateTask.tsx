"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(`Submitting: ${title}`);

    try {
      await fetch("http://localhost:3000/api/v1/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    console.log("refreshing");
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
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

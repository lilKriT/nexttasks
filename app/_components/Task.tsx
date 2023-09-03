"use client";
import { useRouter } from "next/navigation";
import ITask from "@/src/interfaces/ITask";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";

const deleteTask = async (id: string) => {
  try {
    await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const checkTask = async (id: string, checked: boolean) => {
  try {
    // console.log(`Checking task: ${id}. Now it's ${checked}`)
    await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: checked }),
    });
  } catch (error) {
    console.log(error);
  }
};

const editTask = async (id: string, title: string) => {
  try {
    await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  } catch (error) {
    console.log(error);
  }
};

const Task = ({ params: { task } }: { params: { task: ITask } }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const router = useRouter();

  return (
    <li className="taskCard gap-4">
      {/* Left field */}
      {!editing ? (
        <p className="text-lg">{task.title}</p>
      ) : (
        <input
          type="text"
          className="formInput grow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
      {/* Buttons div */}
      <div className="flex items-center gap-2">
        {!editing ? (
          <>
            <input
              type="checkbox"
              className="appearance-none h-6 aspect-square border-2 border-violet-500 cursor-pointer hover:border-violet-300 checked:bg-violet-500 duration-150 ease-in-out"
              defaultChecked={task.completed}
              onChange={(e) => {
                checkTask(task._id, e.target.checked);
                router.refresh();
              }}
            />
            <button
              onClick={() => setEditing(true)}
              className="btn btn--small btn--primary"
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => {
                deleteTask(task._id);
                router.refresh();
              }}
              className="btn btn--small btn--danger"
            >
              <AiFillDelete />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                editTask(task._id, title);
                router.refresh();
                setEditing(false);
              }}
              className="btn btn--small btn--primary"
            >
              <AiOutlineCheck />
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setTitle(task.title);
              }}
              className="btn btn--small btn--danger"
            >
              <AiOutlineClose />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Task;
// I noticed that after opening and closing edit, it shows the right title.

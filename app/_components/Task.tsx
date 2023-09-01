"use client";
import { useRouter } from "next/navigation";
import ITask from "@/src/interfaces/ITask";
import { AiFillDelete } from "react-icons/ai";

const deleteTask = async (id: string) => {
  try {
    await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const Task = ({ params: { task } }: { params: { task: ITask } }) => {
  const router = useRouter();

  return (
    <div className="taskCard">
      <p>{task.title}</p>
      <div>
        <button
          onClick={async () => {
            deleteTask(task._id);
            router.refresh();
          }}
          className="btn btn--small btn--danger"
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Task;

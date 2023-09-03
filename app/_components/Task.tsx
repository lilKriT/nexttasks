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

const checkTask = async (id: string, checked: boolean) => {
  try {
    // console.log(`Checking task: ${id}. Now it's ${checked}`)
    await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({completed: checked})

    })
  } catch (error) {
    console.log(error)
  }
}

const Task = ({ params: { task } }: { params: { task: ITask } }) => {
  const router = useRouter();

  return (
    <div className="taskCard">
      <p>{task.title}</p>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="appearance-none h-6 aspect-square border-2 border-violet-500 cursor-pointer hover:border-violet-300 checked:bg-violet-500 duration-150 ease-in-out" defaultChecked={task.completed} onChange={(e) => checkTask(task._id, e.target.checked)}/>
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

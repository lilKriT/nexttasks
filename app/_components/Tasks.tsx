"use client";
import ITask from "@/src/interfaces/ITask";
import { useRouter } from "next/navigation";

const Tasks = ({ params: { tasks } }: { params: { tasks: ITask[] } }) => {
  const router = useRouter();
  const deleteTask = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {tasks.length === 0 ? (
        "You have no tasks yet."
      ) : (
        <ul className="flex flex-col gap-4">
          {tasks.map((task, idx) => (
            <li className="taskCard" key={idx}>
              <p>{task.title}</p>
              <div>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="btn btn--small btn--danger"
                >
                  DEL
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;

import ITask from "@/src/interfaces/ITask";
import { useRouter } from "next/navigation";
import Task from "./Task";

const fetchTasks = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/tasks`, {
    cache: "no-store", // this or next: revalidate?
  });
  const tasks = await res.json();
  return tasks;
};

const TaskList = async () => {
  const tasks: ITask[] = await fetchTasks();

  return (
    <div className="mt-8">
      {tasks.length === 0 ? (
        "You have no tasks yet."
      ) : (
        <ul className="flex flex-col gap-4">
          {tasks.map((task, idx) => (
            <Task params={{ task }} key={idx} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

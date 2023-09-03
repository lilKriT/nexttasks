import ITask from "@/src/interfaces/ITask";
import Task from "./Task";

const fetchTasks = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:3000/api/v1/tasks`, {
      cache: "no-store",
    });
    // Seems like both localhost and 127.0.0.1 work fine.

    const slowdown = false;
    if (slowdown) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const tasks = await res.json();
    return tasks;
  } catch (error) {
    return [];
  }
};

const TaskList = async () => {
  const tasks: ITask[] = await fetchTasks();

  return (
    <div className="mt-8">
      {tasks.length === 0 ? (
        "You have no tasks yet."
      ) : (
        <ul className="flex flex-col gap-4">
          {tasks.map((task) => (
            <Task params={{ task }} key={task._id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

import ITask from "@/src/types/ITask";
import PublicTask from "./PublicTask";

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

const PublicTaskList = async () => {
  const tasks: ITask[] = await fetchTasks();

  return (
    <div className="mt-8">
      {tasks.length === 0 ? (
        <h1 className="text-5xl text-center tracking-wider">
          No one has shared their tasks yet.
        </h1>
      ) : (
        <>
          <h1 className="text-5xl text-center tracking-wider">
            Shared <span className="gradient">tasks</span>:
          </h1>
          <ul className="flex flex-col gap-4 mt-8">
            {tasks.map((task) => (
              <PublicTask params={{ task }} key={task._id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PublicTaskList;

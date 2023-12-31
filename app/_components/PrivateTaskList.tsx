import ITask from "@/src/types/ITask";
import PublicTask from "./PublicTask";
import { cookies } from "next/headers";

const fetchPrivateTasks = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/tasks`, {
      method: "GET",
      cache: "no-cache",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${cookies().get("auth")?.value}`,
      },
    });

    const tasks = await res.json();
    return tasks;
  } catch (error) {
    return [];
  }
};

const PrivateTaskList = async () => {
  const tasks: ITask[] = await fetchPrivateTasks();

  return (
    <div className="mt-8">
      {tasks.length === 0 ? (
        <h1 className="text-4xl text-center tracking-wider">
          You don&apos;t have any tasks yet.
        </h1>
      ) : (
        <>
          <h1 className="text-5xl text-center tracking-wider">
            Your <span className="gradient">tasks</span>:
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

export default PrivateTaskList;

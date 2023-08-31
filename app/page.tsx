// import Image from "next/image";
import ITask from "@/src/interfaces/ITask";
import Tasks from "./_components/Tasks";

const fetchTasks = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/tasks`);
  const tasks = await res.json();
  return tasks;
};

export default async function Home() {
  const tasks: ITask[] = await fetchTasks();
  return (
    <div className="min-h-screen flex justify-center">
      <h1 className="">Your tasks:</h1>
      <Tasks params={{ tasks }} />
    </div>
  );
}

// import Image from "next/image"
// TODO: check out a: rel= noopener noreferrer
// TODO: check out making arrow with -&gt;

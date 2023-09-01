// import Image from "next/image";
import ITask from "@/src/interfaces/ITask";
import Tasks from "./_components/Tasks";
import CreateTask from "./_components/CreateTask";

const fetchTasks = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/tasks`, {
    cache: "no-store", // this or next: revalidate?
  });
  const tasks = await res.json();
  return tasks;
};

const addTask = () => {
  console.log("Adding task");
};

export default async function Home() {
  const tasks: ITask[] = await fetchTasks();
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container">
        <h1 className="text-5xl text-center tracking-wider">
          Your <span className="gradient">tasks</span>:
        </h1>
        <Tasks params={{ tasks }} />
        <CreateTask />
      </div>
    </div>
  );
}

// import Image from "next/image"
// TODO: check out a: rel= noopener noreferrer
// TODO: check out making arrow with -&gt;

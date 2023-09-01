import ITask from "@/src/interfaces/ITask";
import TaskList from "./_components/TaskList";
import CreateTask from "./_components/CreateTask";

export default async function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container">
        <h1 className="text-5xl text-center tracking-wider">
          Your <span className="gradient">tasks</span>:
        </h1>
        <TaskList />
        <CreateTask />
      </div>
    </div>
  );
}

// import Image from "next/image"
// TODO: check out a: rel= noopener noreferrer
// TODO: check out making arrow with -&gt;

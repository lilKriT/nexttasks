import PublicTaskList from "./_components/PublicTasksList";
import CreateTask from "./_components/CreateTask";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container mx-4">
        <Suspense fallback={<div>Loading tasks...</div>}>
          <PublicTaskList />
        </Suspense>
        <CreateTask />
      </div>
    </div>
  );
}

// TODO: check out a: rel= noopener noreferrer
// TODO: check out making arrow with -&gt;

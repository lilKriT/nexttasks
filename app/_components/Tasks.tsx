import ITask from "@/src/interfaces/ITask";

const Tasks = ({ params: { tasks } }: { params: { tasks: ITask[] } }) => {
  return (
    <div>
      <h2>tasks but from a component:</h2>
      {tasks.length === 0
        ? "You have no tasks yet."
        : tasks.map((task) => (
            <div>
              {task.title} - {task.completed ? "done" : "not done"}
            </div>
          ))}
    </div>
  );
};

export default Tasks;

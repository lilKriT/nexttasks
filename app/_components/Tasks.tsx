import ITask from "@/src/interfaces/ITask";

const Tasks = ({ params: { tasks } }: { params: { tasks: ITask[] } }) => {
  return (
    <div>
      {tasks.length === 0
        ? "You have no tasks yet."
        : tasks.map((task, idx) => (
            <div className="taskCard" key={idx}>
              {task.title} - {task.completed ? "done" : "not done"}
            </div>
          ))}
    </div>
  );
};

export default Tasks;

import Card from "../Card/Card"
import { MainColumn, ColumnTitle, Cards } from "./Column.styled";

function Column({ title, tasks, loading }) {
  const safeTasks = tasks || [];
  const filteredTasks = safeTasks.filter((task) => {
    const taskStatus = task.status?.toLowerCase().trim();
    const columnTitle = title.toLowerCase().trim();
    return taskStatus === columnTitle;
  });

  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {filteredTasks.map((task) => (
          <Card 
            key={task._id}
            item={{
              id: task._id,
              topic: task.topic,
              title: task.title,
              date: new Date(task.date).toLocaleDateString("ru-RU"),
              status: task.status,
              description: task.description
            }} 
          />
        ))}
        {filteredTasks.length === 0 && !loading && (
          <div style={{ padding: "10px", color: "#94A6BE", textAlign: "center" }}>
            Нет задач
          </div>
        )}
      </Cards>
    </MainColumn>
  );
}

export default Column;
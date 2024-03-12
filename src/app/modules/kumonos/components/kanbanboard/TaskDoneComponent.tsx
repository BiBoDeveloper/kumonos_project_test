import { FC, useState } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../../_metronic/helpers";

type Task = {
  id: string;
  imageUrl: string;
  label: string;
  date: string;
  category?: string;
  status: string;
};

type Props = {
  className: string;
  tasks: Task[];
  projectId: string;
};

const TaskDoneComponent: FC<Props> = ({ className, tasks, projectId }) => {
  console.log(tasks);
  
  const taskStatusDone = tasks.filter(task => task.status === "done");

  console.log(taskStatusDone);
  
  return (
    <div className={className}>
      <ul className="list-unstyled">
        {taskStatusDone.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const TaskListItem: FC<{ task: Task }> = ({ task }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  let categoryColor = "";
  if (task.category == "A-category") {
    categoryColor="bg-primary"
  }else if (task.category == "B-category") {
    categoryColor="bg-info"
  }else{
    categoryColor="bg-success"
  }
  return (
    <li
      className="card mb-2 "
      style={{
        cursor: "pointer",
        borderColor: isHovered ? "#1E7ABD" : "",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
             {task.category && 
      <div className="ribbon ribbon ribbon-start ribbon-clip">
        <div className="ribbon-label"> {task.category}
          <span className={`ribbon-inner ${categoryColor}`}></span>
        </div>
      </div>}
      
      <div
        className="card-body d-flex align-items p-4 parent-hover"
        style={{ justifyContent: "space-between" }}
      >
        <span className="m-1" style={{ display: "flex", alignItems: "center" }}>
          <KTIcon iconName="check-circle" className="fs-2x" />

          <span className="m-1">
            <a href="#" className="text-gray-700 ms-2">
              {task.label}
            </a>
          </span>
        </span>
      </div>
      <div
        className="card-footer bg-secondary p-2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span className="ms-3 fs-5">{task.date}</span>
        <a>
          <img
            src={toAbsoluteUrl(task.imageUrl)}
            alt=""
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              width: "25px",
            }}
            title="non"
          />
        </a>
      </div>
    </li>
  );
};

export { TaskDoneComponent };

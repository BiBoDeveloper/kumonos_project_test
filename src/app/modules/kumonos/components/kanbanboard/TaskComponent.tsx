import { FC, useContext, useState } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../../_metronic/helpers";
import DataContext from "../../data/DataContext";
import Swal from 'sweetalert2'
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
const TaskComponent: FC<Props> = ({ className, tasks, projectId }) => {
  const taskStatusOngoing = tasks.filter(task => task.status === "ongoing");

  return (
    <div className={className}>
      <ul className="list-unstyled">
        {taskStatusOngoing.map((task) => (
          <TaskListItem key={task.id} task={task} projectId={projectId}/>
        ))}
      </ul>
    </div>
    
  );
};

const TaskListItem: FC<{ task: Task , projectId: string }> = ({ task, projectId }) => {
  let categoryColor = "";
  if (task.category == "A-category") {
    categoryColor="bg-primary"
  }else if (task.category == "B-category") {
    categoryColor="bg-info"
  }else{
    categoryColor="bg-success"
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleRadioClick = () => {
    console.log(projectId,"task",task.id);
    Swal.fire({
      title: "Are you sure to confirm this task?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#17C653",
      confirmButtonText: "Yes, confirm"
    })
  };
  return (
    <li
      className="card mb-5"
      style={{
        borderColor: isHovered ? "#1E7ABD" : "",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       {task.category && 
      <div className="ribbon ribbon ribbon-start ribbon-clip mt-4">
        <div className="ribbon-label"> {task.category}
          <span className={`ribbon-inner ${categoryColor}`}></span>
        </div>
      </div>}
      


      <div className="card-header d-flex align-items p-4 parent-hover" style={{ justifyContent: "space-between" }}>

        <span className="m-1" style={{ display: "flex", alignItems: "center" }}>
          <span>
            <input
              type="radio"
              name="radioButton"
              style={{ width: "24px", height: "24px", cursor:"pointer",display: "flex", alignItems: "center"}}
              onClick={handleRadioClick}
            />
          </span>
          <span className="text-gray-700 ms-2">
            {task.label}
          </span>
        </span>
      </div>
      <div
  className="card-footer bg-secondary p-2"
  style={{ display: "flex", justifyContent: "space-between" }}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <KTIcon iconName="calendar" className="ms-3 fs-2" />
    <span>{task.date}</span>
  </div>
  <div style={{ display: "flex" }}>
    <a style={{ marginRight: "5px" }}>
      <img
        className="symbol symbol-circle"
        src={toAbsoluteUrl(task.imageUrl)}
        alt=""
        style={{
          cursor: "pointer",
          width: "25px",
        }} 
        title="non"
      />
    </a>
    <a style={{ marginRight: "5px" }}>
      <img
        className="symbol symbol-circle"
        src={toAbsoluteUrl(task.imageUrl)}
        alt=""
        style={{
          cursor: "pointer",
          width: "25px",
        }}
        title="non"
      />
    </a>
    <a style={{ marginRight: "5px" }}>
      <img
        className="symbol symbol-circle"
        src={toAbsoluteUrl(task.imageUrl)}
        alt=""
        style={{
          cursor: "pointer",
          width: "25px",
        }}
        title="non"
      />
    </a>
    <a style={{ marginRight: "5px" }}>
      <img
        className="symbol symbol-circle"
        src={toAbsoluteUrl(task.imageUrl)}
        alt=""
        style={{
          cursor: "pointer",
          width: "25px",
        }}
        title="non"
      />
    </a>
    <a style={{ marginRight: "5px" }}>
      <img
        className="symbol symbol-circle"
        src={toAbsoluteUrl(task.imageUrl)}
        alt=""
        style={{
          cursor: "pointer",
          width: "25px",
        }}
        title="non"
      />
    </a>
  </div>
</div>

    </li>
  );
};

export { TaskComponent };

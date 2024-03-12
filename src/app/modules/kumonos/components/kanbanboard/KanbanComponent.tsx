import { FC, useState } from "react";
import { TaskComponent } from "./TaskComponent";
import { TaskDoneComponent } from "./TaskDoneComponent";
import { KTIcon } from "../../../../../_metronic/helpers";

type Task = {
  id: string;
  imageUrl: string;
  label: string;
  date: string;
  category?: string;
  status: string;
};

type Props = {
  projectName: string;
  projectId: string;
  tasks: Task[];
};

const KanbanComponent: FC<Props> = ({ projectName, projectId, tasks }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const taskStatusDone = tasks.filter(task => task.status === "done");
  console.log(taskStatusDone)

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3
          className="card-title ms-2"
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1",
            width: "27ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            height: "41px",
            marginRight: "10px", 
          }}
        >
          {projectName}
        </h3>
        <a
          href="#"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          id="edit_project_toggle"
          className="d-flex align-items-center text-gray-500 text-hover-primary ms-5 mb-5"
        >
          <KTIcon iconName="pencil" className="fs-3" />
        </a>
      </div>

      <div
        className="col-lg-4 px-2"
        style={{
          minWidth: "400px",
          overflowX: "hidden",
          overflowY: "auto",
          height: "720px",
          scrollbarWidth: "thin",
        }}
      >
        <div style={{ overflowY: "scroll", height: "100%" }}>
          <div className="card mb-3 ">
            <div className="card-{breakpoint}-{mode} card-bordered ">
              <div className="card-header">
                <h3 className="card-title ">Ongoing</h3>
                <a
                  href="#"
                  className="card-title parent-hover"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="top-start"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-dismiss="click"
                  id="new_task_toggle"
                >
                  <span className="text-gray-700 parent-hover-primary fs-4 btn btn-sm btn-light">
                    + Add task
                  </span>
                </a>
              </div>
              <TaskComponent
                className="card-body "
                tasks={tasks}
                projectId={projectId}
              />
            </div>
          </div>
          {taskStatusDone.length > 0 && (

          <div className="card shadow-sm">
            <div
              className="card-header collapsible cursor-pointer rotate"
              onClick={toggleCollapse}
            >
              <span className="card-title">Done</span>
              <div className="card-toolbar">
              <span className="card-title">{taskStatusDone.length}</span>

                <i
                  className={`ki-duotone ${
                    isCollapsed ? "ki-down" : "ki-up"
                  } fs-1`}
                ></i>
              </div>
            </div>
            <div
              id="kt_docs_card_collapsible"
              className={`collapse ${isCollapsed ? "" : "show"}`}
            >
              <TaskDoneComponent
                className="card-body"
                projectId={projectId}
                tasks={tasks}
              />
            </div>
          </div>
         )} 
        </div>
      </div>
    </div>
  );
};

export { KanbanComponent };

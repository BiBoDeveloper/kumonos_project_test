
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../../_metronic/helpers'
import DataContext from "../../data/DataContext";
import { KanbanComponent } from "./KanbanComponent";


export function KanbanBoard() {
  const project  = useContext(DataContext);

  return (
    <DataContext.Provider value={project}>
        
    <div className="d-flex">
    {/* <SearchComponent projectName={undefined} /> */}
  <a
    href="#"
    className="card-title parent-hover "
    data-kt-menu-trigger="click"
    data-kt-menu-overflow="true"
    data-kt-menu-placement="top-start"
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-dismiss="click"
    id="new_project_toggle"
  >
    <span className="text-gray-700 parent-hover-primary fs-4 btn btn-sm btn-light"  style={{marginLeft:"25px", paddingTop:"11px"}}>
      + New Project
    </span>
  </a>
  </div>
      <div
        style={{display: "flex", flexWrap: "nowrap", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "auto"}} className="board-wrapper ">
  
        {project.slice().reverse().map((item, index) => {
            // Check if the current item has a projectName
            if (item.projectName) {
              return (
                <KanbanComponent
                  key={index}
                  projectName={item.projectName}
                  tasks={item.tasks}
                  projectId={item.projectId}
                />
              );
            }
            return null;
          })}
      </div>
      </DataContext.Provider>
    );
  };

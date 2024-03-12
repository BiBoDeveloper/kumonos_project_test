import React, { FC, useState } from "react";
import { KTIcon } from "../../../helpers";
import Select from "react-select";
import "flatpickr/dist/flatpickr.css";

const EditProjectDrawer: FC = () => {

  const taskOptions = [
    { value: "Task 1 for Project R-32", label: "Task 1 for Project R-32" },
    { value: "Task 2 for Project R-32", label: "Task 2 for Project R-32" },
    { value: "Task 3 for Project R-32", label: "Task 3 for Project R-32" },

  ];
  const statusOptions = [
    { value: "Complete", label: "Complete" },
    { value: "Ongoing", label: "Ongoing" },

  ];

  return (
    <div
      id="edit_project"
      className="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="activities"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'700px', 'lg': '700px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#edit_project_toggle"
      data-kt-drawer-close="#edit_project_close"
    >
      <div className="card shadow-none rounded-0  w-100">
        <div className="card-header" id="edit_project_header">
          <h3 className="card-title fw-bolder text-gray-900">Edit project</h3>

          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-active-light-primary me-n5"
              id="edit_project_close"
            >
              <KTIcon iconName="cross" className="fs-1" />
            </button>
          </div>
        </div>
        <div className="card-body position-relative" id="edit_project_body">
          <form>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Project name</span>
              <input type="text" className="form-control" defaultValue={"R-032/kumonos/systory"}/>
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">
                Status 
              </span>

              <Select
                className="react-select-styled border border-gray-300 rounded"
                classNamePrefix="react-select"
                options={statusOptions}
                placeholder="Select a category"
              />
            </div>

            
            <input type="submit" className="btn btn-primary" value={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export { EditProjectDrawer };

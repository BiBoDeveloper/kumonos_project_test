import React, { FC, useState } from "react";
import { KTIcon } from "../../../helpers";
import Select from "react-select";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

const NewTaskDrawer: FC = () => {
  const [dateState, setDateState] = useState<any>({
    date1: new Date(),
  });
  const personOptions = [
    { value: "A-son", label: "A-son" },
    { value: "B-son", label: "B-son" },
    { value: "C-son", label: "C-son" },
  ];
  const categoryOptions = [
    { value: "A-category", label: "A-category" },
    { value: "B-category", label: "B-category" },
    { value: "C-category", label: "C-category" },
  ];

  return (
    <div
      id="new_task"
      className="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="activities"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'700px', 'lg': '700px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#new_task_toggle"
      data-kt-drawer-close="#new_task_close"
    >
      <div className="card shadow-none rounded-0  w-100">
        <div className="card-header" id="new_task_header">
          <h3 className="card-title fw-bolder text-gray-900">New Task</h3>

          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-active-light-primary me-n5"
              id="new_task_close"
            >
              <KTIcon iconName="cross" className="fs-1" />
            </button>
          </div>
        </div>
        <div className="card-body position-relative" id="new_task_body">
          <form>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Task name</span>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">
                Category <span className="text-muted">(Optional)</span>
              </span>

              <Select
                className="react-select-styled border border-gray-300 rounded"
                classNamePrefix="react-select"
                options={categoryOptions}
                placeholder="Select a category"
              />
            </div>
            <div
              className="mb-5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <span className="fw-bold text-gray-700">Start date</span>
                <Flatpickr
                  value={dateState.date}
                  onChange={([date1]) => {
                    setDateState({ date1 });
                  }}
                  className="form-control"
                  placeholder="Pick date"
                  data-date-format="Y/m/d"
                  style={{ width: "310px" }}
                />
              </div>

              <div>
                <span className="fw-bold text-gray-700">Deadline</span>
                <Flatpickr
                  value={dateState.date}
                  onChange={([date1]) => {
                    setDateState({ date1 });
                  }}
                  className="form-control"
                  placeholder="Pick date"
                  data-date-format="Y/m/d"
                  style={{ width: "310px" }}
                />
              </div>
            </div>
            <div className="mb-10">
              <span className="fw-bold text-gray-700">Person in charge</span>

              <Select
                className="react-select-styled border border-gray-300 rounded"
                classNamePrefix="react-select"
                options={personOptions}
                placeholder="Select a person"
              />
            </div>
            <input type="submit" className="btn btn-primary" value={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export { NewTaskDrawer };

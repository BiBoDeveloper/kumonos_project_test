import React, { FC, useState } from "react";
import { KTIcon } from "../../../helpers";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import Swal from 'sweetalert2'

const NewRequestDrawer: FC = () => {
  const [dateState, setDateState] = useState<any>({
    date1: new Date(),
  });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [newProjectName, setNewProjectName] = useState<string>("");
  const handleProjectChange = (selectedOption: any) => {
    setSelectedProject(selectedOption);
    if (selectedOption && selectedOption.value === "new") {
      // Clear new project name input box when selecting "New Main Project Name"
      setNewProjectName("");
    }
  };
  const submitRequest = ()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure to submit this request.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, submit"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Success",
        text: "Your request data has been sent.",
        icon: "success",
    confirmButtonColor: "#3085d6",

      });
    }
  });
}

  const typesOptions = [
    { value: "Removal C", label: "Removal C" },
    { value: "Measure", label: "Measure" },
    { value: "Merge", label: "Merge" },
    { value: "Removal A", label: "Removal A" },
    { value: "Classification", label: "Classification" },
  ];
  const projectNameOptions = [
    {
      value: "2900317/Customer-01/Business-01",
      label: "2900317/Customer-01/Business-01",
    },
    {
      value: "2900318/Customer-02/Business-02",
      label: "2900318/Customer-02/Business-02",
    },
    {
      value: "2900319/Customer-03/Business-03",
      label: "2900319/Customer-03/Business-03",
    },
    { value: "new", label: "+ New Project Name" },
  ];
  return (
    <div
      id="new_request"
      className="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="activities"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'700px', 'lg': '700px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#new_request_toggle"
      data-kt-drawer-close="#new_request_close"
    >
      <div className="card shadow-none rounded-0  w-100">
        <div className="card-header" id="new_request_header">
          <h3 className="card-title fw-bolder text-gray-900">New Request</h3>

          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-active-light-primary me-n5"
              id="new_request_close"
            >
              <KTIcon iconName="cross" className="fs-1" />
            </button>
          </div>
        </div>
        <div className="card-body position-relative" id="new_request_body">
          <form>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Main project name</span>
              {selectedProject && selectedProject.value == "new" ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter new project name"
                />
              ) : (
                <Select
                  className="react-select-styled border border-gray-300 rounded"
                  classNamePrefix="react-select"
                  options={projectNameOptions}
                  value={selectedProject}
                  onChange={handleProjectChange}
                />
              )}
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Camera</span>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Type</span>
              <Select
                className="react-select-styled border border-gray-300 rounded"
                classNamePrefix="react-select"
                options={typesOptions}
              />
            </div>
            <div className="mb-5">
              <label className="mb-4 fw-bold text-gray-700">Target noise <span className="text-muted"> (Japanese language)</span></label>
              <textarea
                className="form-control"
                placeholder="Enter Target noise"
              />
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Target noise <span className="text-muted"> (English language)</span></span>
              <textarea
                className="form-control"
                disabled
              ></textarea>
            </div>
            <div className="mb-5">
              <label className="mb-4 fw-bold text-gray-700">
                Characteristics<span className="text-muted"> (Japanese language)</span>
              </label>
              <textarea
                className="form-control"
                placeholder="Enter Characteristics"
              ></textarea>
            </div>

                <div className="mb-5">
              <span className="fw-bold text-gray-700">Characteristics <span className="text-muted"> (English language)</span></span>
              <textarea
                className="form-control"
                disabled
              ></textarea>
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
                  style={{ width: "250px" }}
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
                  style={{ width: "250px" }}
                />
              </div>
              <div>
                <span className="fw-bold text-gray-700">Predict work days</span>
                <input type="number" className="form-control w-100px" value={0} disabled />
              </div>
 
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Data links</span>
              <input type="text" className="form-control" />
            </div>
            
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Remark</span>
              <textarea
                className="form-control"
                placeholder="Enter remark"
              ></textarea>
            </div>
            <input
              type="button"
              className="btn btn-secondary me-3"
              value={"Cancel"}
            />
            <input type="button" className="btn btn-primary" onClick={submitRequest}  value={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};
export { NewRequestDrawer };

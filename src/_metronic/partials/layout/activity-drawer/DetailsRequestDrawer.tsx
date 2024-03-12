import React, { FC, useState } from "react";
import { KTIcon } from "../../../helpers";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

const DetailsRequestDrawer: FC = () => {
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
      id="details_request"
      className="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="activities"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'700px', 'lg': '700px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#details_request_toggle"
      data-kt-drawer-close="#details_request_close"
    >
      <div className="card shadow-none rounded-0  w-100">
        <div className="card-header" id="details_request_header">
          <h3 className="card-title fw-bolder text-gray-900">
            Details Request
          </h3>

          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-active-light-primary me-n5"
              id="details_request_close"
            >
              <KTIcon iconName="cross" className="fs-1" />
            </button>
          </div>
        </div>
        <div className="card-body position-relative" id="details_request_body">
          <form>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Main project name</span>
              <input
                type="text"
                className="form-control"
                value={"2900318/Customer-02/Business-02"}
                disabled
              />
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Camera</span>
              <input
                type="number"
                className="form-control"
                value={176}
                disabled
              />
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Type</span>
              <Select
                className="react-select-styled border border-gray-300 rounded"
                classNamePrefix="react-select"
                options={typesOptions}
                value={typesOptions[3]}
                isDisabled
              />
            </div>
            <div className="mb-5">
              <label className="mb-4 fw-bold text-gray-700">
                Target noise{" "}
                <span className="text-muted"> (English language)</span>
              </label>
              <textarea
                className="form-control"
                placeholder="Enter Target noise"
                value={"People's noodles, vehicles, photographic equipment and in the air"}
                disabled
              />
            </div>
            <div className="mb-5">
              <label className="mb-4 fw-bold text-gray-700">
                Characteristics
                <span className="text-muted"> (English language)</span>
              </label>
              <textarea
                className="form-control"
                placeholder="Enter Characteristics"
                value={"A lot of people work, remember to have a lot of people's pockets and equipment. Don't forget to drag it out"}
                disabled
              ></textarea>
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Deadline</span>
              <Flatpickr
                value={[new Date("2024-01-15")]}
                onChange={([date1]) => {
                  setDateState({ date1 });
                  console.log(date1);
                }}
                className="form-control"
                placeholder="Pick date"
                data-date-format="Y/m/d"
                disabled
              />
            </div>

            <div className="mb-5">
              <span className="fw-bold text-gray-700">Data links</span>
              <p
                className="fw-bold ms-5 mb-12 mt-3"
                onClick={() => {
                  window.location.href =
                    "http://localhost:5173/metronic8/react/demo7/request";
                }}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                https://www.example.com
              </p>
            </div>
            <div className="mb-5">
              <span className="fw-bold text-gray-700">Remark</span>
              <textarea
                className="form-control"
                placeholder="Enter remark"
                disabled
                value={"A lot of people work, remember to have a lot of people's pockets and equipment. Don't forget to drag it out"}
              ></textarea>
            </div>
            <input
              type="button"
              className="btn btn-secondary me-3"
              value={"Cancel"}
            />
            <input type="submit" className="btn btn-primary" value={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};
export { DetailsRequestDrawer };

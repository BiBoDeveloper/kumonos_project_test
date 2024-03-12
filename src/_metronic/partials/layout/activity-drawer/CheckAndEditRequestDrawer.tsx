import React, { FC, useState } from "react";
import { KTIcon } from "../../../helpers";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

const CheckAndEditRequestDrawer: FC = () => {
  const [dateState, setDateState] = useState<any>({
    date: new Date(),
  });
  const typesOptions = [
    { value: "Removal C", label: "Removal C" },
    { value: "Measure", label: "Measure" },
    { value: "Merge", label: "Merge" },
    { value: "Removal A", label: "Removal A" },
    { value: "Classification", label: "Classification" },
  ];
  const StatusOptions = [
    { value: "Pending", label: "Pending" },
    { value: "Approve", label: "Approve" },
  ];
  const WorkersOptions = [
    { value: "Aiy", label: "Aiy" },
    { value: "Daengnoy", label: "Daengnoy" },
    { value: "Khen", label: "Khen" },
    { value: "Binly", label: "Binly" },
    { value: "Bank", label: "Bank" },
  ];
  const [selectedType, setSelectedType] = useState<object>(typesOptions[3]); // Set initial selected type

  return (
    <div
      id="checkAndEdit_request"
      className="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="activities"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'700px', 'lg': '700px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#checkAndEdit_request_toggle"
      data-kt-drawer-close="#checkAndEdit_request_close"
    >
      <div className="card shadow-none rounded-0  w-100">
        <div className="card-header" id="checkAndEdit_request_header">
          <h3 className="card-title fw-bolder text-gray-900">Edit Request</h3>

          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-active-light-primary me-n5"
              id="checkAndEdit_request_close"
            >
              <KTIcon iconName="cross" className="fs-1" />
            </button>
          </div>
        </div>
        <div
          className="card-body position-relative"
          id="checkAndEdit_request_body"
        >
          <form>
            <div
              className="mb-5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ width: "310px" }}>
                <label className="fw-bold text-gray-700">
                  Main project name
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={"2900319/Customer-03/Business-03"}
                  disabled
                />
              </div>

              <div style={{ width: "310px" }}>
                <label className="fw-bold text-gray-700">
                  Sub project name
                </label>
                <input type="text" className="form-control" defaultValue={""} />
              </div>
            </div>
            <div
              className="mb-5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ width: "310px" }}>
                <label className="fw-bold text-gray-700">Camera</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={176}
                  disabled
                />
              </div>

              <div style={{ width: "310px" }}>
                <label className="fw-bold text-gray-700">Type</label>
                <Select
                  className="react-select-styled border border-gray-300 rounded"
                  classNamePrefix="react-select"
                  options={typesOptions}
                  defaultValue={selectedType}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-4 fw-bold text-gray-700">Target noise</label>
              <textarea
                className="form-control"
                placeholder="Enter Target noise"
                defaultValue={"ນ໋ອຍຂອງ​ຄົນ, ຍານ​ພາ​ຫະ​ນະ, ​ອຸ​ປະ​ກອນຖ່າຍ ແລະ​ ໃນອາກາດ"}
              />
            </div>
            <div className="mb-5">
              <label className="mb-4 fw-bold text-gray-700">
                Characteristics
              </label>
              <textarea
                className="form-control"
                placeholder="Enter Characteristics"
                defaultValue="ຄົນເຮັດວຽກຫຼາຍ ຈື໇ງມີນ໋ອຍຂອງຄົນ ແລະ ອຸປະກອນຖ່າຍຫຼາຍ. ບໍ່ຕ້ອງລືບນ໋ອຍລາກອອກກໍ່ໄດ້"
              ></textarea>
            </div>
            <div
              className="mb-5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ width: "310px" }}>
                <label className="fw-bold text-gray-700">Worker</label>
                <Select
                  className="react-select-styled border border-gray-300 rounded"
                  classNamePrefix="react-select"
                  options={WorkersOptions}
                />
              </div>

              <div style={{ width: "150px" }}>
                <label className="fw-bold text-gray-700">Checker1</label>
                <Select
                  className="react-select-styled border border-gray-300 rounded"
                  classNamePrefix="react-select"
                  options={WorkersOptions}
                />
              </div>
              <div style={{ width: "150px" }}>
                <label className="fw-bold text-gray-700">Checker2</label>
                <Select
                  className="react-select-styled border border-gray-300 rounded"
                  classNamePrefix="react-select"
                  options={WorkersOptions}
                />
              </div>
            </div>
            <div
              className="mb-5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <span className="fw-bold text-gray-700">Start date</span>
                <Flatpickr
                  // value={dateState.date}
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
                  // value={[new Date("2024-01-15")]}
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

            <div className="mb-5">
              <label className="form-label">Status</label>
              <Select
                className="react-select-styled border border-gray-300 rounded"
                classNamePrefix="react-select"
                options={StatusOptions}
              />
            </div>
            <div className="mb-5">
              <label className="fw-bold text-gray-700">Data links</label>
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
            <input
              type="button"
              className="btn btn-secondary me-3"
              defaultValue={"Cancel"}
            />
            <input type="submit" className="btn btn-primary" defaultValue={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};
export { CheckAndEditRequestDrawer };

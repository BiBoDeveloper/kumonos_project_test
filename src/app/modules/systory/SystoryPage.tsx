import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Request } from "./components/request/Request";
import { Calendar } from "./components/calendar/Calendar";
import { UserManagement } from "./components/usermanagement/UserManagement";
import { SystoryTasks } from "./components/systorytask/SystoryTask";
import { Settings } from "./components/settings/Settings";

const SystoryBreadCrumbs: Array<PageLink> = [
  {
    title: "systory",
    path: "/systory/systory-tasks",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const KumonosPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path="systory-tasks"
          element={
            <>
              <PageTitle breadcrumbs={SystoryBreadCrumbs}>
                Systory Tasks
              </PageTitle>
              <SystoryTasks />
            </>
          }
        />
        <Route
          path="Request"
          element={
            <>
              <PageTitle breadcrumbs={SystoryBreadCrumbs}>Request</PageTitle>
              <Request />
            </>
          }
        />
        <Route
          path="user-management"
          element={
            <>
              <PageTitle breadcrumbs={SystoryBreadCrumbs}>
                User Management
              </PageTitle>
              <UserManagement />
            </>
          }
        />
        <Route
          path="calendar"
          element={
            <>
              <PageTitle breadcrumbs={SystoryBreadCrumbs}>calendar</PageTitle>
              <Calendar />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle breadcrumbs={SystoryBreadCrumbs}>Settings</PageTitle>
              <Settings />
            </>
          }
        />
        <Route index element={<Navigate to="/systory/systory-tasks" />} />
      </Route>
    </Routes>
  );
};

export default KumonosPage;

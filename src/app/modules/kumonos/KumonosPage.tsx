import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {KanbanBoard} from './components/kanbanboard/KanbanBoard'
import {Calendar} from './components/calendar/Calendar'
import {UserManagement} from './components/usermanagement/UserManagement'
import {CompleteProject} from './components/completeproject/CompleteProject'

const KumonosBreadCrumbs: Array<PageLink> = [
  {
    title: 'Kumonos',
    path: '/kumonos/kanban-board',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

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
          path='kanban-board'
          element={
            <>
              <PageTitle breadcrumbs={KumonosBreadCrumbs}>Kanban Board</PageTitle>
              <KanbanBoard />
            </>
          }
        />
        <Route
          path='Calendar'
          element={
            <>
              <PageTitle breadcrumbs={KumonosBreadCrumbs}>Calendar</PageTitle>
              <Calendar />
            </>
          }
        />
        <Route
          path='user-management'
          element={
            <>
              <PageTitle breadcrumbs={KumonosBreadCrumbs}>User Management</PageTitle>
              <UserManagement />
            </>
          }
        />
        <Route
          path='complete-project'
          element={
            <>
              <PageTitle breadcrumbs={KumonosBreadCrumbs}>Complete project</PageTitle>
              <CompleteProject />
            </>
          }
        />
        <Route index element={<Navigate to='/kumonos/kanban-board' />} />
      </Route>
    </Routes>
  )
}

export default KumonosPage

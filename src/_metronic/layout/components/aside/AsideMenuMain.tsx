import { useIntl } from "react-intl";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";


export function AsideMenuMain() {
  const intl = useIntl();

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='color-swatch'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      {/* <div className='menu-item'>
        <div className='menu-content pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Systory</span>
        </div>
      </div> */}
<AsideMenuItemWithSub
  to="/kumonos"
  title="Kumonos"
  icon="abstract-20"

>
 

        <AsideMenuItem
          to="kumonos/kanban-board"
          title="Kanban Board"
          icon="element-6"
        />
        <AsideMenuItem
          to="kumonos/calendar"
          title="Calendar"
          icon="calendar"
        />
        <AsideMenuItem
          to="kumonos/User-management"
          title="User management"
          icon="profile-circle"

        />
        <AsideMenuItem
          to="kumonos/Complete-project"
          title="Complete project"
          icon="abstract-14"

        />
      </AsideMenuItemWithSub>


      <AsideMenuItemWithSub
        to="/systory"
        title="Systory"
        icon="abstract-44"
      >

        <AsideMenuItem
          to="systory/systory-tasks"
          title="Systory Tasks"
          icon="graph-up"
        />
        <AsideMenuItem
          to="systory/request"
          title="Request"
          icon="add-files"
        />
        <AsideMenuItem
          to="systory/user-management"
          title="User management"
          icon="profile-circle"
        />
        <AsideMenuItem
          to="systory/calendar"
          title="Calendar"
          icon="calendar"
        />
         <AsideMenuItem
          to="systory/settings"
          title="Settings"
          icon="setting-2"
        />
      </AsideMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Systory</span>
        </div>
      </div> */}
    </>
  );
}

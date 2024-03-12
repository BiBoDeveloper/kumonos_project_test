import React, {FC} from 'react'
import {KTIcon} from '../../../helpers'


const NewProjectDrawer: FC = () => (
  <div
    id='new_project'
    className='bg-body'
    data-kt-drawer='true'
    data-kt-drawer-name='activities'
    data-kt-drawer-activate='true'
    data-kt-drawer-overlay='true'
    data-kt-drawer-width="{default:'700px', 'lg': '700px'}"
    data-kt-drawer-direction='end'
    data-kt-drawer-toggle='#new_project_toggle'
    data-kt-drawer-close='#new_project_close'
  >
    <div className='card shadow-none rounded-0  w-100'>
      <div className='card-header' id='new_project_header'>
        <h3 className='card-title fw-bolder text-gray-900'>New Project</h3>

        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
            id='new_project_close'
          >
            <KTIcon iconName='cross' className='fs-1' />
          </button>
        </div>
      </div>
      <div className='card-body position-relative' id='new_project_body'>

          <form>
            <div className='mb-5'>
            <span className='fw-bold text-gray-700'>Business number</span>
            <input type="text" className="form-control"  />
            </div>
            <div className='mb-5'>
            <span className='fw-bold text-gray-700'>Customer name</span>
            <input type="text" className="form-control" />
            </div>
            <div className='mb-5'>
            <span className='fw-bold text-gray-700'>Business name</span>
            <input type="text" className="form-control" />
            </div>
            <input type="submit" className="btn btn-primary" value={"Submit"}/>

          </form>
      </div>

    </div>
  </div>
)

export {NewProjectDrawer}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#PrototipoRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#PrototipoCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#PrototipoLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#PrototipoDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#PrototipoTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#PrototipoEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#PrototipoJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#PrototipoJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrototipoEntityModule {}

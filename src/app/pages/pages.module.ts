import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { ProgressComponent } from './progress/progress.component';

//ng2-charts
import { NgChartsModule } from 'ng2-charts';
//temp
import { IncrementerComponent } from '../components/incrementer/incrementer.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementerComponent,
    GraficoDonaComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule,NgChartsModule],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AlgoritmosComponent } from './algoritmos/algoritmos.component';
import { AlgortimoModalComponent } from './algoritmos/algoritmoModal/algoritmoModal.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PruebaModalComponent } from './pruebas/prueba-modal/prueba-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbRadioModule,
    NbCheckboxModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule
],
  declarations: [
    PagesComponent,
    AlgoritmosComponent,
    AlgortimoModalComponent,
    PruebasComponent,
    PruebaModalComponent

  ],
})
export class PagesModule {
}

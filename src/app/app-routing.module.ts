import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../app/table/table.component';
import { ModalComponent } from '../app/modal/modal.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ], 
})

export class AppRoutingModule { }

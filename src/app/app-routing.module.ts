import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: CustomerDataComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

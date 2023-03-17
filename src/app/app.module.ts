import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { OptionComponent } from './option/option.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionItemsComponent } from './section-items/section-items.component';
import { StoreModule } from '@ngrx/store';
import { addOptionReducer } from './option/store/add-option.reducer';
import { CustomerDataComponent } from './customer-data/customer-data.component';

import { addClientDataReducer } from './store/clientData.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    OptionComponent,
    SidebarComponent,
    SectionItemsComponent,
    CustomerDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      addClientData: addClientDataReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

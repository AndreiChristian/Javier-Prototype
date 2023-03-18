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

import { CustomerDataComponent } from './customer-data/customer-data.component';

import { addClientDataReducer } from './store/clientData.reducer';
import { addOptionReducer } from './store/option.reducer';
import { SectionSidebarComponent } from './sidebar/section-sidebar/section-sidebar.component';
import { ItemsSidebarComponent } from './sidebar/items-sidebar/items-sidebar.component';
import { OptionsSidebarComponent } from './sidebar/options-sidebar/options-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    OptionComponent,
    SidebarComponent,
    SectionItemsComponent,
    CustomerDataComponent,
    SectionSidebarComponent,
    ItemsSidebarComponent,
    OptionsSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      addClientData: addClientDataReducer,
      addOption:addOptionReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SecretaireComponent } from './sidebar/secretaire/secretaire.component';
import { InfosComponent } from './sidebar/infos/infos.component';
import { AccoutingComponent } from './sidebar/accouting/accouting.component';
import { LogoutComponent } from './logout/logout.component';
import { VisaComponent } from './visa/visa.component';
import {CommonModule} from "@angular/common";
import {ToolbarModule} from "@syncfusion/ej2-angular-navigations";
import {GridAllModule} from "@syncfusion/ej2-angular-grids";
import {NumericTextBoxAllModule, RatingAllModule} from "@syncfusion/ej2-angular-inputs";
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {DatePickerAllModule} from "@syncfusion/ej2-angular-calendars";
import {DropDownListAllModule} from "@syncfusion/ej2-angular-dropdowns";
import {CheckBoxModule} from "@syncfusion/ej2-angular-buttons";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SidebarComponent,
    SecretaireComponent,
    InfosComponent,
    AccoutingComponent,
    LogoutComponent,
    VisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ToolbarModule,
    GridAllModule,
    NumericTextBoxAllModule,
    RatingAllModule ,
    DialogModule,
    DatePickerAllModule,
    DropDownListAllModule,
    ReactiveFormsModule,
    FormsModule,
    CheckBoxModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

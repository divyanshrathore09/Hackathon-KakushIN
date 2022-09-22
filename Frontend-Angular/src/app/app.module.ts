import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenderComponent } from './gender/gender.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomeraddressComponent } from './customeraddress/customeraddress.component';
import { DisplaynurseComponent } from './displaynurse/displaynurse.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { CustomerrequirementsComponent } from './customerrequirements/customerrequirements.component';
import { EditcustomerrequirementsComponent } from './editcustomerrequirements/editcustomerrequirements.component';
import { NurseprofileComponent } from './nurseprofile/nurseprofile.component';
import { NursedetailComponent } from './nursedetail/nursedetail.component';
import { NurseprofilecompletenessComponent } from './nurseprofilecompleteness/nurseprofilecompleteness.component';
import { UpdatenurseprofileComponent } from './updatenurseprofile/updatenurseprofile.component';
import { PatientrequestComponent } from './patientrequest/patientrequest.component';
import { AgencyformComponent } from './agencyform/agencyform.component';
import { AgencypatientrequestComponent } from './agencypatientrequest/agencypatientrequest.component';
import { AgencynursedetailsComponent } from './agencynursedetails/agencynursedetails.component';
import { AgencyaddnurseComponent } from './agencyaddnurse/agencyaddnurse.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { NurseloginComponent } from './nurselogin/nurselogin.component';
import { AgencyloginComponent } from './agencylogin/agencylogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    GenderComponent,
    CustomerdetailsComponent,
    CustomeraddressComponent,
    DisplaynurseComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeaderbackComponent,
    FooterbackComponent,
    CustomerrequirementsComponent,
    EditcustomerrequirementsComponent,
    NurseprofileComponent,
    NursedetailComponent,
    NurseprofilecompletenessComponent,
    UpdatenurseprofileComponent,
    PatientrequestComponent,
    AgencyformComponent,
    AgencypatientrequestComponent,
    AgencynursedetailsComponent,
    AgencyaddnurseComponent,
    CustomerloginComponent,
    NurseloginComponent,
    AgencyloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

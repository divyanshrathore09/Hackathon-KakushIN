import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AgencyaddnurseComponent } from './agencyaddnurse/agencyaddnurse.component';
import { AgencyformComponent } from './agencyform/agencyform.component';
import { AgencyloginComponent } from './agencylogin/agencylogin.component';
import { AgencynursedetailsComponent } from './agencynursedetails/agencynursedetails.component';
import { AgencypatientrequestComponent } from './agencypatientrequest/agencypatientrequest.component';
import { CustomeraddressComponent } from './customeraddress/customeraddress.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerrequirementsComponent } from './customerrequirements/customerrequirements.component';
import { DisplaynurseComponent } from './displaynurse/displaynurse.component';
import { EditcustomerrequirementsComponent } from './editcustomerrequirements/editcustomerrequirements.component';
import { FooterComponent } from './footer/footer.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { GenderComponent } from './gender/gender.component';
import { HeaderComponent } from './header/header.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { HomeComponent } from './home/home.component';
import { NursedetailComponent } from './nursedetail/nursedetail.component';
import { NurseloginComponent } from './nurselogin/nurselogin.component';
import { NurseprofileComponent } from './nurseprofile/nurseprofile.component';
import { NurseprofilecompletenessComponent } from './nurseprofilecompleteness/nurseprofilecompleteness.component';
import { PatientrequestComponent } from './patientrequest/patientrequest.component';
import { UpdatenurseprofileComponent } from './updatenurseprofile/updatenurseprofile.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'admindashboard', component:AdmindashboardComponent},
    { path: 'gender', component:GenderComponent},
    { path: 'customerdetails', component:CustomerdetailsComponent},   
    { path: 'customeraddress', component:CustomeraddressComponent},
    { path: 'header', component:HeaderComponent},
    { path: 'footer', component:FooterComponent},
    { path: 'headerback', component:HeaderbackComponent},
    { path: 'footerback', component:FooterbackComponent},
    { path: 'customerrequirements', component:CustomerrequirementsComponent},
    { path: 'displaynurse', component:DisplaynurseComponent},
    { path: 'editcustomerrequirements', component:EditcustomerrequirementsComponent},
    { path: 'nurseprofile', component:NurseprofileComponent},
    { path: 'nursedetail', component:NursedetailComponent},
    { path: 'nurseprofilecompleteness', component:NurseprofilecompletenessComponent},
    { path: 'updatenurseprofile', component:UpdatenurseprofileComponent},
    { path: 'patientrequest', component:PatientrequestComponent},
    { path: 'agencyform', component:AgencyformComponent},
    { path: 'agencypatientrequest', component:AgencypatientrequestComponent},
    { path: 'agencynursedetails',component:AgencynursedetailsComponent},
    { path: 'agencyaddnurse', component:AgencyaddnurseComponent},
    { path: 'customerlogin', component:CustomerloginComponent},
    { path: 'nurselogin', component:NurseloginComponent},
    { path: 'agencylogin', component:AgencyloginComponent}


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

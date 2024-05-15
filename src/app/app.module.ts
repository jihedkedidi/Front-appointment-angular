import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpRequestInterceptor } from './_helpers/auth.interceptor';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ModeratorInterfaceComponent } from './moderator-interface/moderator-interface.component';
import { CounterAgentComponent } from './counter-agent/counter-agent.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterfceClientComponent } from './interfce-client/interfce-client.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AgentGuichetComponent } from './agent-guichet/agent-guichet.component';
import { UsersComponent } from './users/users.component';
import { NavbarLoggedComponent } from './navbar-logged/navbar-logged.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TestComponent } from './test/test.component';
import { SignUpCounterAgentComponent } from './sign-up-counter-agent/sign-up-counter-agent.component';
import { CounterAgentTestComponent } from './counter-agent-test/counter-agent-test.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { CurveChartComponent } from './curve-chart/curve-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { AdminCalendarComponent } from './admin-calendar/admin-calendar.component';
import { CounterAgentAppointmentsComponent } from './counter-agent-appointments/counter-agent-appointments.component';
import { UserRendezVousComponent } from './user-rendez-vous/user-rendez-vous.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LineChartComponent } from './line-chart/line-chart.component';
import { LinechartstatusComponent } from './linechartstatus/linechartstatus.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    AppSignupComponent,
    NavbarComponent,
    BlogComponentComponent,
    SignInComponent,
    HomeComponent,
    FooterComponent,
    UserLoginComponent,
    AdminInterfaceComponent,
    UserInterfaceComponent,
    ModeratorInterfaceComponent,
    CounterAgentComponent,
    InterfceClientComponent,
    SidebarComponent,
    ViewUsersComponent,
    AdminComponent,
    UserComponent,
    AgentGuichetComponent,
    UsersComponent,
    NavbarLoggedComponent,
    TestComponent,
    SignUpCounterAgentComponent,
    CounterAgentTestComponent,
    DashbordComponent,
    PieChartComponent,
    CurveChartComponent,
    ChartsComponent,
    AdminCalendarComponent,
    CounterAgentAppointmentsComponent,
    UserRendezVousComponent,
    LineChartComponent,
    LinechartstatusComponent
  ],
  imports: [//module
    BrowserModule,
    FormsModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgbModule,
    FullCalendarModule, 
    TableModule,
    ButtonModule,
    NgChartsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot(),
  ]
  ,providers:[{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import {BlogComponentComponent} from './blog-component/blog-component.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuardGuard } from './guards/role-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { SignUpCounterAgentComponent } from './sign-up-counter-agent/sign-up-counter-agent.component';
import { CounterAgentTestComponent } from './counter-agent-test/counter-agent-test.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CurveChartComponent } from './curve-chart/curve-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CounterAgentComponent } from './counter-agent/counter-agent.component';
import { AdminCalendarComponent } from './admin-calendar/admin-calendar.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { CounterAgentAppointmentsComponent } from './counter-agent-appointments/counter-agent-appointments.component';
import { UserRendezVousComponent } from './user-rendez-vous/user-rendez-vous.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AgentGuichetComponent } from './agent-guichet/agent-guichet.component';
import { LinechartstatusComponent } from './linechartstatus/linechartstatus.component';
const routes: Routes = [
  {path:'',redirectTo:'acceuil',pathMatch:'full'},
  { path: 'acceuil', component: HomeComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'app-signup', component: AppSignupComponent },
  { path: 'blog', component: BlogComponentComponent },
  { path: 'auth/sign-in/user-logged', component: UserLoginComponent,canActivate:[AuthGuard]},
  { path: 'user', component: UserComponent ,canActivate:[AuthGuard]},
  { path: 'admin', component: AdminComponent ,canActivate:[AuthGuard]},
  {path: 'admin/dashbord', component: DashbordComponent,canActivate:[AuthGuard]},
  {path: 'admin/calendar', component: AdminCalendarComponent,canActivate:[AuthGuard]},
  {path: 'admin/users', component: UsersComponent,canActivate: [AuthGuard, RoleGuardGuard], 
  data: { roles: ['ROLE_ADMIN'] } },
  {path: 'admin/ajout-employee', component: SignUpCounterAgentComponent,canActivate:[AuthGuard]},
  {path: 'agentguichet', component: CounterAgentTestComponent,canActivate:[AuthGuard]},
  {path: 'ct', component: CounterAgentComponent},
  {path: 'c', component: PieChartComponent},
  {path: 'cc', component: CurveChartComponent},
  {path: 'e', component: ChartsComponent},
  {path: 'view-users', component: ViewUsersComponent},
  {path: 'agent-guichet-rdv', component: CounterAgentAppointmentsComponent,canActivate:[AuthGuard]},
  {path: 'user/rendez-vous', component: UserRendezVousComponent,canActivate:[AuthGuard]},
  {path: 'line', component: LineChartComponent,canActivate:[AuthGuard]},
  {path:'linechart',component:LinechartstatusComponent,canActivate:[AuthGuard]},
  {path:'zz',component:AgentGuichetComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
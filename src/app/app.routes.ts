import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { StudentRegisterComponent } from './student-register/student-register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: StudentRegisterComponent},
    {path:'admin-register', component: AdminRegisterComponent},
    {path:'admin-login', component: AdminLoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate: [adminGuard]}
    
];

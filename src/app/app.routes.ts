import { Home} from './pages/home/home';
import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup';

import { LoginComponent } from './pages/login/login';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component:
    Home , canActivate:
    [AuthGuard] }
];

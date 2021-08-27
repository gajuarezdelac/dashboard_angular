import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, children: [
     { path: "search", component: SearchComponent },
     { path: "payment", component: PaymentComponent },
     { path: "profile", component: ProfileComponent },
     { path: '', pathMatch: 'full', redirectTo: '/login' },
  ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

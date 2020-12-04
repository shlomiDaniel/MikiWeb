import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './users/user/admin-page/admin-page.component';
import { OrderViewComponent } from './users/user/admin-page/order-view/order-view.component';
import { PictureAddComponent } from './users/user/admin-page/picture-add/picture-add.component';
import { PictureManagementComponent } from './users/user/admin-page/picture-management/picture-management.component';
import { LoginComponent } from './users/user/auth/login/login.component';
import { RegistrationComponent } from './users/user/auth/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'addpicture', component: PictureAddComponent },
      { path: 'picturemenge', component: PictureManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

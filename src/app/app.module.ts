import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserCrudComponent } from './pages/user-crud/user-crud.component';
import { ModalFormUserComponent } from './pages/user-crud/modal-form-user/modal-form-user.component';
import { ModalViewUserComponent } from './pages/user-crud/modal-view-user/modal-view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserCrudComponent,
    ModalFormUserComponent,
    ModalViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

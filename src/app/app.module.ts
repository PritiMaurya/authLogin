import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
import {ApiService} from "./api.service";
import {AuthGuard} from "./auth.guard";


const appModule: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path:'page',component: LeftMenuComponent, canActivate:[AuthGuard]},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appModule),
    HttpModule
  ],
  providers: [AppService,ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

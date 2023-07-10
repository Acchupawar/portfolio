import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    
  ],
  providers:[MatSnackBarModule]
})
export class NavbarModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconoNavComponent } from './components/icono-nav/icono-nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BarraLoadingComponent } from './components/barra-loading/barra-loading.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsComponent } from './components/stats/stats.component';
import { DialogExperienceComponent } from './components/experience/dialogExperience/dialogExperience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IconoNavComponent,
    AboutMeComponent,
    BarraLoadingComponent,
    ExperienceComponent,
    DialogExperienceComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactComponent,
    SidebarComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

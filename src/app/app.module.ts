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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IconoNavComponent,
    AboutMeComponent,
    BarraLoadingComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

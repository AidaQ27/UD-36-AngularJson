import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { MihomeComponent } from './mihome/mihome.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {
    path: 'mihome',
    component: MihomeComponent,
  },

  {
    path: 'acercade',
    component: AcercadeComponent,
  },

  {
    path: 'personajes',
    component: PersonajesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

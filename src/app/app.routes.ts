import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { LoginComponent } from './views/login/login.component';
import { AddMaquinaComponent } from './views/add-maquina/add-maquina.component';
import { GestorUsuariosComponent } from './views/gestor-usuarios/gestor-usuarios.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'about',
    component: AboutViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addMaquina',
    component: AddMaquinaComponent
  },
  {
    path: 'gestorUsuarios',
    component: GestorUsuariosComponent
  }
];

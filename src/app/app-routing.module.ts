import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MotoristasindexComponent} from './motoristas/motoristasindex/motoristasindex.component';
import {EditarmotoristaComponent} from './motoristas/editarmotorista/editarmotorista.component';
import {ConsultarmotoristasComponent} from './motoristas/consultarmotoristas/consultarmotoristas.component';
import {CadastrarmotoristasComponent} from './motoristas/cadastrarmotoristas/cadastrarmotoristas.component';
import { ConteudoindexComponent } from './motoristas/conteudoindex/conteudoindex.component';
import { PerfilmotoristaComponent } from './motoristas/perfilmotorista/perfilmotorista.component';
import { ConsultaralertaComponent } from './motoristas/consultaralerta/consultaralerta.component';
import { VeralertasComponent } from './motoristas/veralertas/veralertas.component';


const routes: Routes = [
  {path: 'motoristaindex', component:MotoristasindexComponent},
  {path: 'cadastrarmotorista', component:CadastrarmotoristasComponent},
  {path: 'consultarmotorista', component:ConsultarmotoristasComponent},
  {path:'index', component: ConteudoindexComponent},
  {path:'perfilmotorista', component:PerfilmotoristaComponent},
  {path:'consultaalertas', component:ConsultaralertaComponent},
  {path: 'veralertas', component:VeralertasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarmotoristasComponent } from './cadastrarmotoristas/cadastrarmotoristas.component';
import { ConsultarmotoristasComponent } from './consultarmotoristas/consultarmotoristas.component';
import { MotoristasindexComponent } from './motoristasindex/motoristasindex.component';
import { EditarmotoristaComponent } from './editarmotorista/editarmotorista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConteudoindexComponent } from './conteudoindex/conteudoindex.component';
import { PerfilmotoristaComponent } from './perfilmotorista/perfilmotorista.component';
import {AgmCoreModule} from '@agm/core';
import { ConsultaralertaComponent } from './consultaralerta/consultaralerta.component';
import { VeralertasComponent } from './veralertas/veralertas.component';
import { GraficosComponent } from './graficos/graficos.component';
import { HistoricoComponent } from './historico/historico.component';
import { VerhistoricoComponent } from './verhistorico/verhistorico.component';





@NgModule({
  declarations: [CadastrarmotoristasComponent, ConsultarmotoristasComponent, MotoristasindexComponent, EditarmotoristaComponent, ConteudoindexComponent, PerfilmotoristaComponent, ConsultaralertaComponent, VeralertasComponent, GraficosComponent, HistoricoComponent, VerhistoricoComponent],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD28ZXDTgz1TWig809tNwcpZrb5fRR8kKA'
    })
    
    
  ],
  exports: [CadastrarmotoristasComponent,ConsultarmotoristasComponent,MotoristasindexComponent,
    ConsultarmotoristasComponent, ConteudoindexComponent,PerfilmotoristaComponent,ConsultaralertaComponent,VeralertasComponent,
    GraficosComponent,HistoricoComponent,VerhistoricoComponent]
})
export class MotoristasModule {
}
 

 

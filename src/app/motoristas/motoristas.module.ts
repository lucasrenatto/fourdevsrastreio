import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarmotoristasComponent } from './cadastrarmotoristas/cadastrarmotoristas.component';



@NgModule({
  declarations: [CadastrarmotoristasComponent],
  imports: [
    CommonModule
  ],
  exports: [CadastrarmotoristasComponent]
})
export class MotoristasModule { }

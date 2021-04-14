import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { localizacao } from 'src/app/model/motorista';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-veralertas',
  templateUrl: './veralertas.component.html',
  styleUrls: ['./veralertas.component.css']
})
export class VeralertasComponent implements OnInit {
  referenciaTabelaCadastrarMotorista : AngularFireList<localizacao> = null; 
  lng: any;
  lat: localizacao[];
  zoom:number =19;
  localizacoes: localizacao[];


  constructor(private banco:AngularFireDatabase) {

    this.referenciaTabelaCadastrarMotorista = banco.list('/localização');

   }

  ngOnInit(): void {
    this.obterLocalizacao();

  }
  obterLocalizacao():void
{
 

  {

    this.referenciaTabelaCadastrarMotorista.snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload, ... c.payload.val()}))))
      .subscribe(data => {
        this.localizacoes = data;
        console.log(this.localizacoes);
        
      });
    
  }

}
}

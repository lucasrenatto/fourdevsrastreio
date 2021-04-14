import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { localizacao } from 'src/app/model/motorista';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-perfilmotorista',
  templateUrl: './perfilmotorista.component.html',
  styleUrls: ['./perfilmotorista.component.css']
})
export class PerfilmotoristaComponent implements OnInit {
  title = 'Meu primeiro projeto maps';
  
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

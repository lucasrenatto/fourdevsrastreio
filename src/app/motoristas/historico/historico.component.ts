import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import {consultarMotorista} from "../../model/motorista";

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  referenciaTabelaCadastrarMotorista : AngularFireList<consultarMotorista> = null; 
  motoristas:any;

  constructor(private banco: AngularFireDatabase) {
    this.referenciaTabelaCadastrarMotorista = banco.list('/cadastromotorista');

   }

  ngOnInit(): void {
    this.obterMotoristas();
  }

  obterMotoristas():void
  {
  this.referenciaTabelaCadastrarMotorista.snapshotChanges().pipe
  {

    this.referenciaTabelaCadastrarMotorista.snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload, ... c.payload.val()}))))
      .subscribe(data => {
        this.motoristas = data;
      });
  }
  }

}

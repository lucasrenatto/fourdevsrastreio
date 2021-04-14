import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {consultarMotorista} from "../../model/motorista";
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireList} from '@angular/fire/database';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-consultaralerta',
  templateUrl: './consultaralerta.component.html',
  styleUrls: ['./consultaralerta.component.css']
})
export class ConsultaralertaComponent implements OnInit {
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

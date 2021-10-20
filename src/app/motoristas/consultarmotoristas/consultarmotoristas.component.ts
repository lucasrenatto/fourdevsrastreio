import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';
import {consultarMotorista} from "../../model/motorista";
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireList} from '@angular/fire/database';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-consultarmotoristas',
  templateUrl: './consultarmotoristas.component.html',
  styleUrls: ['./consultarmotoristas.component.css']
})
export class ConsultarmotoristasComponent implements OnInit {

referenciaTabelaCadastrarMotorista : AngularFireList<consultarMotorista> = null; 
motoristas:any;
motoristaexcluir: consultarMotorista;
motoristaEditar: consultarMotorista;
modoEdicao: boolean = false;



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
  excluirMotorista(motoristaexcluir:consultarMotorista)
  {
  this.banco.list("motoristas").remove(motoristaexcluir.key);
  }

  ativarModoEdicao(t1:consultarMotorista)
  {
    this.modoEdicao = !this.modoEdicao;
    this.motoristaEditar = t1;
  }

  alterarMotorista()
  {
    this.banco.list("motoristas").update(this.motoristaEditar.key, {cm_marca_cam:this.motoristaEditar.cm_marca_cam, cm_placa_cam:this.motoristaEditar.cm_placa_cam})
    console.log(this.motoristaEditar);
    this.modoEdicao = !this.modoEdicao;
    this.obterMotoristas();
  }

  botaoClicado() {
    alert('O Usuário Foi Excluido com Exito!');
 }


}


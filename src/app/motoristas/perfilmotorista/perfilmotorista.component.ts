import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { localizacao } from 'src/app/model/motorista';
import{sensores} from 'src/app/model/sensores'
import { from } from 'rxjs';
import {map} from 'rxjs/operators';
import { Key } from 'selenium-webdriver';


@Component({
  selector: 'app-perfilmotorista',
  templateUrl: './perfilmotorista.component.html',
  styleUrls: ['./perfilmotorista.component.css']
})
export class PerfilmotoristaComponent implements OnInit {
  title = 'Meu primeiro projeto maps';
  
  referenciaTabelaCadastrarMotorista : AngularFireList<localizacao> = null; 
  referenciaTabelaEsp : AngularFireList<sensores> = null;
  lng: any;
  lat: localizacao[];
  zoom:number =19;
  lon :number = -2331;
  valorbotao:string = "Trancar Baú";
  laat: number =-11111;
  localizacoes: localizacao[];
  button:sensores;
  botaoeditar:sensores;
  valor:string;
  variavel:sensores;
  teste:any;
  a:any;
  b:boolean;
  false:boolean=false;
  constructor(private banco:AngularFireDatabase) {

    this.referenciaTabelaCadastrarMotorista = banco.list('/localização');
    this.referenciaTabelaEsp = banco.list('/Sensores');
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

  statusBotao(){
  {
    
    //this.banco.list('/Sensores', ref => ref.orderByChild('botao').endAt('cri\uf8ff'))
      //.valueChanges().subscribe(resultado => {this.teste = resultado});
      //this.a = this.teste[1] as sensores;
    //if (this.teste[1] ==true){
      //this.valorbotao = "destrancar Baú";
      //alert('O Baú foi liberado.');
    //}
    if (this.valorbotao=="Trancar Baú"){
      this.valorbotao = "Destrancar Baú";
      alert('O Baú foi trancado.');;
    }

    else {
      this.valorbotao = "Trancar Baú";
      alert('O Baú foi destrancado.');;
      
    }
     
      ///console.log(this.a) 
      ///if (this.a == true){
        //console.log("Chegou aqui"); 
        //this.valorbotao = "Destrancar Baú";
        //this.banco.list('/Sensores', ref => ref.orderByChild('botao').endAt('cri\uf8ff'))
        //.update(this.variavel.key,{botao:false})
       
       
        
      //}
      //if (this.a == false){
        //console.log("Chegou aqui negativo"); 
        //this.valorbotao = "Trancar Baú";
       
       
      //}
        


      
  

   
   
   
      
   }
   

}

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import {Router} from '@angular/router';
import {consultarMotorista} from "../../model/motorista";
@Component({
  selector: 'app-cadastrarmotoristas',
  templateUrl: './cadastrarmotoristas.component.html',
  styleUrls: ['./cadastrarmotoristas.component.css']
})
export class CadastrarmotoristasComponent implements OnInit {
motoristaIncluir: consultarMotorista;
referenciaTabelaCadastrarMotorista : AngularFireList<consultarMotorista> = null; 
qmotoristas:number=0;
valor;


  constructor(private banco: AngularFireDatabase, private router:Router) {
  this.motoristaIncluir= new consultarMotorista(null,null,null,null,null,null,null,null,null,null,null,null);
  this.referenciaTabelaCadastrarMotorista= banco.list('/cadastromotorista');
   }

  ngOnInit(): void {
  
  }
  incluirMotorista (){
    console.log(this.motoristaIncluir);
    this.referenciaTabelaCadastrarMotorista.push(this.motoristaIncluir);
    this.router.navigate(['/consultarmotorista']);
   
   

    
}
confirmarCadastro(){
  alert ('Você cadastrou um usuário com exito!')
  this.qmotoristas = 1 + 1;
  console.log(this.qmotoristas);
  return this.qmotoristas;
  
}
}

import { Component } from '@angular/core';
import endereco from 'src/app/home/home.page.ts'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  enderecos:Array<Object> = []

  ionViewDidEnter(){
let endereco1= new endereco ()
    endereco1.rua ='Rua Cambara'
    endereco1.bairro = 'Jardim Miray'
    endereco1.cidade = 'Itaquaquecetuba'
    endereco1.estado = 'SP'
    endereco1.numero = '866'
    this.enderecos.push(endereco1)
  }
}

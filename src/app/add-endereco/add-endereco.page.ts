import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-endereco',
  templateUrl: './add-endereco.page.html',
  styleUrls: ['./add-endereco.page.scss'],
})
export class AddEnderecoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buscar(cep){
   const cepString = cep.el.value
   const cepValido = cep.replace('1','Ola')
   console.log(cepValido)

  }

}

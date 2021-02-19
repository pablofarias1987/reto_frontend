import { Component, OnInit } from '@angular/core';
import { dataServices } from './../dataservices/data.services';
import { Credito } from './../dataservices/credito';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

	creditos : Credito[];

	getCreditos(): void {
		this.dataServices
			.getCreditos()
			.then(creditos => this.creditos = creditos );
	}



  constructor(private dataServices: dataServices) { }
  ngOnInit() {
  	this.getCreditos();

  }
}
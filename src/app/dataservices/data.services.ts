import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Credito } from './credito';


@Injectable()
export class dataServices {

	constructor(private http: Http) {}
	
	private headers = new Headers({'Content-Type': 'application/json'});

		getCreditos(): Promise<Credito[]> {
			return this.http.get('http://localhost:8000/credito?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Credito[])
		}




		createCredito(d: Credito): Promise<Credito> {
			return this.http
			.post("http://localhost:8000/credito", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Credito)
		}

}

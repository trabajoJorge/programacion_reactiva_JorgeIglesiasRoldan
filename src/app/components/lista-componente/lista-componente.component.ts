import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/zip'
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-lista3',
  templateUrl: './lista-componente.component.html',
  styleUrls: ['./lista-componente.component.css']
})
export class ListaComponenteComponent implements OnInit {
  lista:Observable<string[]>=Observable.of(["hola","que","tal","estas"],
  ["hola2","que2","tal2","estas2"],["hola3","que3","tal3","estas3"]);
  listaTemporal:any;
  constructor() {
    this.listaTemporal=Observable.zip(this.lista,Observable.interval(500),(a,b)=>a)
  }
  ngOnInit() {
  }
}

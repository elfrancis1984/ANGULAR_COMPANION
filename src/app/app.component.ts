import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taxistas: any[] = [];
  taxistaSelecionado: any = {};
  siguiendo:boolean = false;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private afDB: AngularFireDatabase){
     afDB.list('/usuarios').subscribe(taxistas=>{
       console.log(taxistas);
       this.taxistas = taxistas;
       if(this.siguiendo){
         for(let taxista of taxistas){
           if(taxista.$key === this.taxistaSelecionado.$key){
             this.lat = taxista.lat;
             this.lng = taxista.lng;
           }
         }
       }
     });
  }

  seguir_taxita(taxista:any){
    this.lat = taxista.lat;
    this.lng = taxista.lng;
    this.siguiendo = true;
    this.taxistaSelecionado = taxista;
  }

  dejar_seguir(){
    this.siguiendo = false;
    this.taxistaSelecionado = {};
  }
}

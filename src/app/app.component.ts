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

  lat: number = -0.1806532;
  lng: number = -78.46783820000002;

  constructor(private afDB: AngularFireDatabase){
     afDB.list('/usuarios').subscribe(taxistas=>{
       console.log(taxistas);
       this.taxistas = [];
       for(let taxista of taxistas){
         if(taxista.lat && taxista.lng){
            this.taxistas.push(taxista);
         }

       }
       //this.taxistas = taxistas;
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

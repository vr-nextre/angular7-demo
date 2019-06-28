import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from './model/device';
import {NgForm} from '@angular/forms';


const URL = 'http://localhost:3000';

@Component({
  selector: 'vr-catalog',
  template: `



    <div *ngIf="error"
         class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = null"></i>
    </div>


    <form #f="ngForm" (submit)="save(f)">
      <input type="text" placeholder="Modello..." [ngModel]="active?.label" name="label">
      <button type="submit">{{active ? "EDIT" : "ADD"}}</button>
      <button type="button" (click)="reset(f)">RESET</button>
    </form>


    <li class="list-group-item"
        [ngClass]="{'active':device.id === active?.id}"
        *ngFor="let device of devices"
        (click)="setActvice(device)"
    >

      <!--
      <i class="fa fa-apple" *ngIf="device.os==='ios'" ></i>
      <i class="fa fa-android" *ngIf="device.os==='android'"></i>
      -->

      <i class="fa" [ngClass]="{
      'fa-android':device.os==='android',
      'fa-apple':device.os==='ios'
    }"
         [style.color]="device.os === 'android' ? 'green' : 'grey'"
      ></i>

      {{device.label}}
      <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>

      <div class="pull-right">
      <span [style.color]="device.price>500 ? 'red' : null ">
      € {{device.price}}
      </span>
        <i class="fa fa-trash"
           (click)="delete(device, $event)"
        ></i>
      </div>
    </li>
    <pre>{{active | json}}</pre>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {

  // http: HttpClient;
  devices: Device[];
  error: any;
  active: Device;

  // usato per iniettare le dipendenze e costruire l'oggetto
  constructor(private http: HttpClient) {
    // this.http = http;
  }


  // usato per valorizzare le dipendenze, avviene subito dopo il costruttore
  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`).subscribe(res => this.devices = res);
  }



  save(form: NgForm) {
    if (this.active) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  add(form: NgForm) {
    // console.log(form.value);
    this.http.post<Device>(`${URL}/devices`, form.value).subscribe((res: Device) => {
      this.devices.push(res);  // stessi nomi sui name della form per semplificare la cosa
    });
  }

  edit(form: NgForm) {
    // no put, perdo gli attributi che non sto inviando
    // patch, aggiorna solo gli attributi inviati, lascia intatti gli altri
    this.http.patch<Device>(`${URL}/devices/${this.active.id}`, form.value)
      .subscribe((res: Device) => {
        const index = this.devices.findIndex(d => d.id === this.active.id);
        this.devices[index] = res;
      });
  }

  delete(item: Device, event: MouseEvent) {
    event.stopPropagation();
    // in ui e su db son due cose diverse
    this.http.delete(`${URL}/devices/${item.id}`).subscribe(
      () => {    // rimuovo da UI
        this.devices.splice(this.devices.indexOf(item), 1);

      },
      // IN CASO DI ERRORE
      err => this.error = err
    );
  }

  setActvice(device: Device) {
    this.active = device;
  }

  reset(form: NgForm) {
    this.active = undefined;
    form.reset();
  }
}

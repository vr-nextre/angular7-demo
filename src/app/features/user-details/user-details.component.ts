import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vr-user-details',
  template: `
  <div *ngIf="user">
    <p><b>Name</b>: {{user.name}}</p>
    <p><b>Email</b>: {{user.email}}</p>
   </div>
   <hr>
   <button (click)="goNext()">Next</button>
   <!-- 
    <pre>
      {{user | json}}
    </pre>
    -->
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  user: any;
  id:number;

  constructor(http: HttpClient, activatedRoute: ActivatedRoute, private router: Router) {
    //tutta sta roba la metto in un observable che al cambio farà il ricaricamento delle info    
    //this.id = +activatedRoute.snapshot.params['id'];
    //http.get('https://jsonplaceholder.typicode.com/users/'+this.id)
    //.subscribe(res => this.user=res);

    activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      //console.log(this.id);
    http.get('https://jsonplaceholder.typicode.com/users/'+this.id)
    .subscribe(res => this.user=res);
    })
  }

  ngOnInit() {    
  }

  goNext(){
    // approccio errato xkè il costruttore non viene invocato nuovamente
    this.router.navigateByUrl('users/'+ (this.id + 1) ) 

  }

}

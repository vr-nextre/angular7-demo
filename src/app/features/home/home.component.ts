import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vr-home',

  template: `
  <div class="home-component">
  <div class="row">
          <div class="col-md-4 mb-4" *ngFor="let image of images">
                  <div class="card">
                          <div class="card-header d-flex justify-content-between align-items-center">
                                  <span class=""><img src="https://www.countryflags.io/{{image.country}}/shiny/64.png" > </span>
                                  <h6 class="inline">{{image.name}}</h6>
                          </div>
                          <img class="card-img-top rounded-0" src="https://source.unsplash.com/482x280/?{{image.country}},{{image.name}},{{image.tag}}" >
                          <div class="card-body"> 
                                  <div class="content">
                                  <div *ngIf="image.description.length>4" [innerHTML]="image.description"></div>
                                  </div>
                          </div>
                  </div>        
          </div>
  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  data: any;
  images: any = [
    {"id":1 , description : "aaa" , country : 'it', name :'Italy', tag:'Roma'},
    {"id":2 , description : "" , country : 'cm', name :'Camerun', tag: 'Douala'},
    {"id":3 , description : "" , country : 'be', name :'Belgium', tag: 'Bruxelles'}
  ]

  

  constructor(private httpClient: HttpClient) {    
    httpClient.get<any>('https://it.wikipedia.org/api/rest_v1/page/summary/'+this.images[0].tag).subscribe(res=>this.data = res)
  }

  ngOnInit() {
    for(let item of this.images){
       this.loadData(item.tag)
       .subscribe(res=>item.description = res.extract_html);
    }
  }

  loadData(tag: any){  
      //console.log(tag);
      return this.httpClient.get<any>('https://it.wikipedia.org/api/rest_v1/page/summary/'+tag)
  }

}

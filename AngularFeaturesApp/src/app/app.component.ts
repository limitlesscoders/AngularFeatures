import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'LimitLessCoders | AngularFeaturesApp';
  public features: any;
  constructor(){

  }

  ngOnInit(): void {
    this.features = [{
      title: 'Data Binding'
    }];
  }

ngOnDestroy(): void {
  
  }

}

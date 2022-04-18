import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMe1: boolean = false;
  showMe2: boolean = !false;

  toggle1(){
    this.showMe1 = !this.showMe1;
  }

  toggle2(){
    this.showMe2 = !this.showMe2;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WOW ANGULAR 4';
  angularVersion = 4;
  isAngular4 = this.angularVersion ===4;
}

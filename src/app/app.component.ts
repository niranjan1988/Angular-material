import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-material';
  notifications = 10;
  opened= true;

logState(state){
  console.log(state);
  
}


}

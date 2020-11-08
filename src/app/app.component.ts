import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-material';
  notifications = 10;
  opened = true;
  selectedValue = "vue";
  options = ['Angular', 'React', 'Vue'];

  logSideNavState(state) {
    console.log(state);
  }

  logTabChange(selectedIndex) {
    console.log(selectedIndex);
  }


}

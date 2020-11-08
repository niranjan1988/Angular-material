import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';


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

  minDate = new Date();
  maxDate = new Date(2020, 11, 15);
  selectedDate = new Date();





  logSideNavState(state) {
    console.log(state);
  }

  logTabChange(selectedIndex) {
    console.log(selectedIndex);
  }

  dateFilter = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  openSnackbar(text: string, action: string) {
    let snackBarRef = this.snackBar.open(text, action, { duration: 2000 });

    snackBarRef.afterOpened().subscribe(() => {
      console.log('Snackbar opened!');
    })

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snackbar dismissed!');
    })

    snackBarRef.onAction().subscribe(() => {
      console.log('Snackbar Action is triggered!');
    })
  }

  openCustomSnackbarComponent() {
    this.snackBar.openFromComponent(CustomSnackbarComponent, { duration: 2000 });
  }





  constructor(private snackBar: MatSnackBar) { }

}

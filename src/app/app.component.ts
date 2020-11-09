import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { CustomComponent } from './custom/custom.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular-material';
  notifications = 10;
  opened = true;
  selectedValue = "vue";
  options = ['Angular', 'React', 'Vue'];

  minDate = new Date();
  maxDate = new Date(2020, 11, 15);
  selectedDate = new Date();

  virtualScrollArray = [];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    for (let index = 0; index < 1000; index++) {
      this.virtualScrollArray.push(index);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

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

  openDialog() {
    let dialogRef = this.dialog.open(CustomComponent, { data: { name: 'Niranjan' } });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    })
  }

  logRowData(row) {
    console.log(row);

  }

  filterData(filterText: string) {
    this.dataSource.filter = filterText.trim().toLowerCase();
  }

}

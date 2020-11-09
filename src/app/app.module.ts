import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import { MatButtonToggleModule  } from '@angular/material/button-toggle'
import { MatIconModule  } from '@angular/material/icon';
import { MatBadgeModule  } from '@angular/material/badge';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatMenuModule  } from '@angular/material/menu';
import { MatListModule  } from '@angular/material/list';
import { MatDividerModule  } from '@angular/material/divider';
import { MatGridListModule  } from '@angular/material/grid-list';
import { MatExpansionModule  } from '@angular/material/expansion';
import { MatCardModule  } from '@angular/material/card';
import { MatTabsModule  } from '@angular/material/tabs';
import { MatStepperModule  } from '@angular/material/stepper';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule  } from '@angular/material/select';
import { MatAutocompleteModule  } from '@angular/material/autocomplete';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatRadioModule  } from '@angular/material/radio';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { CustomComponent } from './custom/custom.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    CustomSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

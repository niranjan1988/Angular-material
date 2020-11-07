import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

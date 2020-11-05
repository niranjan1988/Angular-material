import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import { MatButtonToggleModule  } from '@angular/material/button-toggle'
import { MatIconModule  } from '@angular/material/icon';
import { MatBadgeModule  } from '@angular/material/badge';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatProgressBarModule  } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

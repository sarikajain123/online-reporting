import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncateStringPipe } from './pipes/truncate-string.pipe';
// import {MatExpansionModule} from '@angular/material';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescriptionDialogComponent } from './dashboard/description-dialog/description-dialog.component';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
// import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormsComponent,
    DashboardContentComponent,
    TruncateStringPipe,
    DescriptionDialogComponent
  ],
  entryComponents: [
    DescriptionDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmenitiesBookingComponent } from './amenities-booking/amenities-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { Convert24hrsTo12hrsPipe } from './pipes/convert24hrs-to12hrs.pipe';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AmenitiesBookingComponent,
    Convert24hrsTo12hrsPipe,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [
    SuccessDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

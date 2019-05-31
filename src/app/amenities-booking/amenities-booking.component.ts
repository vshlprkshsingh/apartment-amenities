import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import * as _ from 'lodash';

import { AmenityService } from '../services/amenity.service';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-amenities-booking',
  templateUrl: './amenities-booking.component.html',
  styleUrls: ['./amenities-booking.component.less'],
})
export class AmenitiesBookingComponent implements OnInit {

  amenitiesCollection: Array<any>;
  bookAmenityForm: FormGroup;
  bookingForm: FormGroup;
  timeSlots: Array<any>;
  bookingCollection: Array<any> = [];
  today: Date = new Date();

  constructor(private _amenityService: AmenityService, private fb: FormBuilder, public _dialog: MatDialog) { }

  ngOnInit() {
    this.amenitiesCollection = this._amenityService.amenityData;
    this.generateTimeSlots();
  }

  /**
   * function to add booking
   */
  addBooking(amenity): void {
    let bookingFormData: FormGroup = this.createBooking(amenity);

    if (bookingFormData) {
      if (this.bookingCollection.length > 0) {
        let allSt = [];
        let allEt = [];
        allSt = _.filter(this.bookingCollection, (el) => {
          if (el.id == bookingFormData.value.id && el.date == bookingFormData.value.date && parseInt(el.start_time) >= parseInt(bookingFormData.value.start_time))
            return el;
        });
        allEt = _.filter(this.bookingCollection, (el) => {
          if (el.id == bookingFormData.value.id && el.date == bookingFormData.value.date && parseInt(el.end_time) <= parseInt(bookingFormData.value.end_time))
            return el;
        });
        if (allSt.length > 0 && allEt.length > 0) {
          console.log(allSt, allEt);
          this.openDialog(null);
          return;
        }
      }
      this.bookingCollection.push(bookingFormData.value);
      _.each(this.amenitiesCollection, (el) => {
        el.date = "";
        el.start_time = "";
        el.end_time = "";
      });
      console.log(bookingFormData);
      this.openDialog(bookingFormData.value);
    } else {
      alert('Please fill in form details.');
    }
  }

  /**
 * function to create booking data
 */
  createBooking(amenity): FormGroup {

    let cost = this.getCost(amenity);

    this.bookingForm = this.fb.group({
      id: [amenity.id, [Validators.required]],
      name: [amenity.name, Validators.required],
      date: [amenity.date, [Validators.required]],
      start_time: [amenity.start_time, [Validators.required]],
      end_time: [amenity.end_time, [Validators.required]],
      cost: [cost, [Validators.required]]
    });

    if (this.bookingForm.valid) {
      return this.bookingForm;
    } else {
      (<any>Object).values(this.bookingForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return null;
    }
  }

  /**
 * function to find cost of booking
 */
  private getCost(amenity): number {
    let st = parseInt(amenity.start_time);
    let et = parseInt(amenity.end_time);
    let amenityData = _.find(this.amenitiesCollection, ['id', amenity.id]);
    if (et <= 16) {
      let interval = et - st;
      return interval * amenityData.price1;
    }
    if (st < 16 && et > 16) {
      let interval1 = 16 - st;
      let interval2 = et - 16;
      return (interval1 * amenityData.price1) + (interval2 * amenity.price2);
    }
    if (st >= 16) {
      let interval = et - st;
      return interval * amenityData.price2;
    }
    return null;
  }

  /**
 * function to generate start and end time slots
 */
  generateTimeSlots() {
    this.timeSlots = [];
    for (let i = 10; i <= 22; i++) {
      let t1 = (i.toString().length == 1) ? '0' + i + ':00' : i + ':00';
      this.timeSlots.push(t1)
    }
  }

  /**
 * function to disable booked start time
 */
  checkToDisableStartTime(id, date, time): boolean {
    if (date != "") {
      if (this.bookingCollection.length > 0) {
        let booked = _.filter(this.bookingCollection, (el: any) => {
          return el.id == id && el.date.getTime() === date.getTime() && parseInt(el.start_time) <= parseInt(time) && parseInt(time) <= parseInt(el.end_time);
        });
        if (booked.length > 0)
          return true;
        else
          return false;
      }
    }
  }

  /**
  * function to disable booked end time
  */
  checkToDisableEndTime(id, date, time): boolean {
    if (date != "") {
      if (this.bookingCollection.length > 0) {
        let booked = _.filter(this.bookingCollection, (el: any) => {
          return el.id == id && el.date.getTime() === date.getTime() && parseInt(el.end_time) >= parseInt(time) && parseInt(time) > parseInt(el.start_time);
        });
        if (booked.length > 0)
          return true;
        else
          return false;
      }
    }
  }

  /**
  * function to open modals
  */
  openDialog(bookingData) {
    const dialogRef = this._dialog.open(SuccessDialogComponent, {
      data: bookingData
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  /**
  * function to clear filled form
  */
  clearData(type) {
    switch (type) {
      case 'date':
        _.each(this.amenitiesCollection, (el) => {
          el.start_time = "";
          el.end_time = "";
        });
        break;
      case 'st':
        _.each(this.amenitiesCollection, (el) => {
          el.end_time = "";
        });
    }
  }
}

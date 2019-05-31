import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesBookingComponent } from './amenities-booking.component';
import { MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmenityService } from '../services/amenity.service';
import { Convert24hrsTo12hrsPipe } from '../pipes/convert24hrs-to12hrs.pipe';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

describe('AmenitiesBookingComponent', () => {
  let component: AmenitiesBookingComponent;
  let fixture: ComponentFixture<AmenitiesBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AmenitiesBookingComponent,
        Convert24hrsTo12hrsPipe,
        SuccessDialogComponent
      ],
      providers: [AmenityService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitiesBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

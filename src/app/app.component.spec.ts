import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AmenitiesBookingComponent } from './amenities-booking/amenities-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { Convert24hrsTo12hrsPipe } from './pipes/convert24hrs-to12hrs.pipe';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { AmenityService } from './services/amenity.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        AppComponent,
        AmenitiesBookingComponent,
        Convert24hrsTo12hrsPipe,
        SuccessDialogComponent
      ],
      providers: [
        AmenityService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'apartment-amenities-booking'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('apartment-amenities-booking');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to apartment-amenities-booking!');
  // });
});

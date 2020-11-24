// modules
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import localeEsMx from '@angular/common/locales/es-MX';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//#region MATERIAL
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
/* FORMS */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
//#endregion

/* components */
import { AppComponent } from '../components/app/app.component';
// import { RomanianComponent } from '../components/romanian/romanian.component';
// import { SubmitFormComponent } from '../components/tracker/submit-form/submit-form.component';
// import {
//   NewUserComponent,
//   SuccesRegisterDialogComponent,
// } from '../components/tracker/new-user/new-user.component';
// import {
//   QueryLogComponent,
//   LogTableComponent,
// } from '../components/tracker/query-log/query-log.component';

registerLocaleData(localeEsMx, 'es-MX');

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
};

@NgModule({
  declarations: [
    AppComponent,
    // RomanianComponent,
    // SubmitFormComponent,
    // NewUserComponent,
    // SuccesRegisterDialogComponent,
    // QueryLogComponent,
    // LogTableComponent,
  ],
  imports: [
    FlexLayoutModule,
    SwiperModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

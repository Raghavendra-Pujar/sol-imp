import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuffetBookingComponent } from './buffet-booking/buffet-booking.component';
import { BuffetBookingService } from './buffet-booking/buffet-booking.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagePipe } from './buffet-booking/message.pipe';
import { GetBookingComponent } from './get-booking/get-booking.component';
import { PlateCountPipe } from './plate-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuffetBookingComponent,
    MessagePipe,
    GetBookingComponent,
    PlateCountPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BuffetBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

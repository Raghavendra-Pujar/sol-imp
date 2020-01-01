import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { BuffetBookingService } from './buffet-booking.service';

@Component({
  selector: 'app-buffet-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class BuffetBookingComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  buffetBookingForm: FormGroup;
  constructor(private fb: FormBuilder, private buffetBookingService: BuffetBookingService) { }



  ngOnInit() {
    this.buffetBookingForm = this.fb.group({
      buffetName : ['',Validators.required],
      emailId : ['',Validators.required],
      plateCount : ['',Validators.required],
      bookedOn : ['', Validators.required]
    })
  }

  bookBuffet(){
    this.errorMessage = null;
    this.successMessage = null;
    this.buffetBookingService.bookBuffet(this.buffetBookingForm.value).subscribe(
      (response)=>{this.successMessage=response.message;console.log("Message: ",this.successMessage)},
      (errorResponse)=>this.errorMessage=errorResponse.error.message,
    )
  }

}

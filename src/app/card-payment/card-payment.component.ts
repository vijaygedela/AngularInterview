import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit {
  formdata: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formdata = this.fb.group({
      cardNum: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(16)]],
      username: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      amount: ['', [Validators.required]]
  
    });
  }
  onSubmitData(data) {
    console.log(data);
  }

}

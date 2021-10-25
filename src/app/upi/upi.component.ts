import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss']
})
export class UpiComponent implements OnInit {
  formdata: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.formdata = this.fb.group({
      upiId: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(20)]],
     
      amount: ['', [Validators.required]]
  
    });
  }
  onSubmitData(data) {
    console.log(data);
  }

}

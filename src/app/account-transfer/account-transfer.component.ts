import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.scss']
})
export class AccountTransferComponent implements OnInit {
  formdata: FormGroup;

  constructor(private fb: FormBuilder) {
  
   }

  ngOnInit() {
   
   this.formdata = this.fb.group({
    accountnumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
    username: ['', [Validators.required]],
    ifsc: ['', [Validators.required]],
    amount: ['', [Validators.required]]

  });
   
  }
  onSubmitData(data) {
    console.log(data);
  }
  

}

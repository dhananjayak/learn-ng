import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LogonInfo } from '../shared/models/LogonInfo';
import { LogonService } from './logon-service';


@Component({
  selector: 'logon-form',
  templateUrl: './logon-form.html'
})
export class LogonFormComponent
{
  logonForm : FormGroup;

  constructor(private fb : FormBuilder, private logonService : LogonService){
    console.log(this.logonService.getLogonInfo());
    this.logonForm =
        this.createFormUsing(fb);

    this.logonForm.patchValue(this.logonService.getLogonInfo());
  }

  createForm(){
    return new FormGroup({
      id : new FormControl(''),
      password : new FormControl('')
    });
  }

  createFormUsing(fb : FormBuilder){
    return fb.group({
      id:[''],
      password: ['']
    });
  }

  onSubmit(){
    console.log(this.logonForm.value);
  }
}

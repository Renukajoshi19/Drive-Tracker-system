import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-createdrive',
  templateUrl: './createdrive.component.html',
  styleUrls: ['./createdrive.component.css'],
  providers:[DataserviceService]
})
export class CreatedriveComponent implements OnInit {
  cnm = new FormControl('', [Validators.required]);
  no_of_rsrcs = new FormControl('', [Validators.required]);
  exp_req = new FormControl('', [Validators.required]);
  ctc = new FormControl('', [Validators.required]);
  join_crt = new FormControl('', [Validators.required]);
  bond = new FormControl('', [Validators.required]);
  position = new FormControl('', [Validators.required]);
  followup = new FormControl('', [Validators.required]);
  edu_crt = new FormControl('', [Validators.required]);


  driveform: FormGroup = this.builder.group({
    cnm: this.cnm,
    no_of_rsrcs: this.no_of_rsrcs,
    exp_req: this.exp_req,
    ctc: this.ctc,
    join_crt: this.join_crt,
    bond: this.bond,
    position: this.position,
    followup: this.followup,
    edu_crt: this.edu_crt


  });
  constructor(private builder: FormBuilder, private _service: DataserviceService) { }

  ngOnInit() {
  }
  submit() {
    this._service.setregg(this.driveform.value).subscribe();


  }


}

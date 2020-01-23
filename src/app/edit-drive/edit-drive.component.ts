import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../viewt-drive/viewt-drive.component';

@Component({
  selector: 'app-edit-drive',
  templateUrl: './edit-drive.component.html',
  styleUrls: ['./edit-drive.component.css'],
  providers:[DataserviceService]
})
export class EditDriveComponent implements OnInit {

  cnm = new FormControl('', [Validators.required]);
  no_of_rsrcs = new FormControl('', [Validators.required]);
  exp_req = new FormControl('', [Validators.required]);
  ctc = new FormControl('', [Validators.required]);
  join_crt = new FormControl('', [Validators.required]);
  bond = new FormControl('', [Validators.required]);
  position = new FormControl('', [Validators.required]);
  followup = new FormControl('', [Validators.required]);
  edu_crt = new FormControl('', [Validators.required]);
  did = new FormControl('', [Validators.required]);


  driveform: FormGroup = this.builder.group({
    cnm: this.cnm,
    no_of_rsrcs: this.no_of_rsrcs,
    exp_req: this.exp_req,
    ctc: this.ctc,
    join_crt: this.join_crt,
    bond: this.bond,
    position: this.position,
    followup: this.followup,
    edu_crt: this.edu_crt,
did:this.did
  });
  constructor(private builder: FormBuilder, private _service: DataserviceService,public dialogRef: MatDialogRef<EditDriveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
    temp;
  ngOnInit() {
  }
  submit() {
    this._service.editData(this.driveform.value).subscribe((x)=>this.temp=x);
    console.log(this.driveform.value);
  }

}

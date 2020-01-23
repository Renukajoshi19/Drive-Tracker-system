import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { MatDialog } from '@angular/material';
import { EditDriveComponent } from '../edit-drive/edit-drive.component';

export interface DialogData {
  cnm: any;
  no_of_rsrcs:any; 
  exp_req:any;
  ctc:any;
  join_crt:any; 
  bond:any;
  position: any;
  followup: any;
  edu_crt: any;
  did:any;
}



@Component({
  selector: 'app-viewt-drive',
  templateUrl: './viewt-drive.component.html',
  styleUrls: ['./viewt-drive.component.css'],
  providers:[DataserviceService]
})
export class ViewtDriveComponent implements OnInit {
  viewdrive:FormGroup;
  constructor(private _createService:DataserviceService,public dialog: MatDialog) { 

  }
  data:any[];
  temp:any;
  ngOnInit() {

    this._createService.showData().subscribe((e:any)=>
    {
     return this.data=e
});
        console.log(this.data);
    
  }
  deleteData(i)
  {
    this._createService.deleteData(i).subscribe(data => {
    console.log(data);
    confirm('You want Delete This Data');
   this.reloadData();
});}
  reloadData() {
    this._createService.showData().subscribe((e:any)=>
    {
     return this.data=e
});
  }
  cnm: any;
  no_of_rsrcs:any; 
  exp_req:any;
  ctc:any;
  join_crt:any; 
  bond:any;
  position: any;
  followup: any;
  edu_crt: any;
  did:any;
  edit(e)
  {
    this.did=e.did;
   this.cnm =e.cnm;
   this.no_of_rsrcs=e.no_of_rsrcs; 
    this.exp_req=e.exp_req;
    this.ctc=e.ctc;
    this.join_crt=e.join_crt; 
    this.bond=e.bond;
    this.position=e.position;
    this.followup=e.followup;
    this.edu_crt=e.edu_crt;

  } 

  openDialog() {
    const dialogRef = this.dialog.open(EditDriveComponent ,{
       data:{did:this.did,cnm:this.cnm,no_of_rsrcs:this.no_of_rsrcs,exp_req:this.exp_req,ctc:this.ctc,join_crt:this.join_crt,bond:this.bond,
        position:this.position,followup:this.followup,edu_crt:this.edu_crt}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.reloadData();
    });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataserviceService {

  constructor(private temp:HttpClient) { }
    setreg(x)
    {
return this.temp.post("http://localhost:8080/MiniProject/Resitration",x);
    
  }

  setregg(y)
  {
return this.temp.post("http://localhost:8080/DriveTracker/CreateDrive",y);
  
}
showData()
{
  return this.temp.get("http://localhost:8080/DriveTracker/ViewDriveServlet");
}
deleteData(i)
{
  return this.temp.post("http://localhost:8080/DriveTracker/DeleteServlet",i);

}
editData(did)
{
  alert("hiii im inside")
  return this.temp.post("http://localhost:8080/DriveTracker/EditServlet",did);

}

}

import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 ReceivedData:any[]=[];
  constructor(private ds:DataService) { }
  
  
  
  //tittle:string="kaveri";
  //friends=["Reshma","Siri","Haritha","Pujitha"];
  //birthday=new Date();
  ngOnInit(): void {
  
  this.ds.makeAHttpReq().subscribe((result)=>{
     this.ReceivedData=result;
  })
}

}

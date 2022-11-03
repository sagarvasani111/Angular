import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit, OnChanges, DoCheck{

  item:any;
  constructor(private data:DataService) { }  
  ngDoCheck(): void {
    this.item = this.data.getData();
    console.log(this.item)
  }

  ngOnInit(): void {
    this.item = this.data.getData();
    console.log("page init",this.item)
  }
 
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

}



import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { DataService } from '../data.service';
import * as _ from 'lodash';
import { result } from 'lodash';

interface State {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  selectedOption = 'None';
   item:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.item = this.data.getData();
    console.log(this.item)
  }

  state: State[] = [
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Maharastra', viewValue: 'Maharastra'},
    {value: 'Rajasthan', viewValue: 'Rajasthan'},
  ];

  onChange($event: any) {
    debugger;
   this.data.Change($event)
   this.data.getData()
  }


}

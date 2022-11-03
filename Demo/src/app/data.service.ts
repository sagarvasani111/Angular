import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  temp = data;
  constructor() { }

  getData(){
    return data
  }

  Change($event: any) {
    debugger;
    let filterdata = _.filter(this.temp,(result) =>{
      return result.state.toLowerCase() == $event.value.toLowerCase();
    })
    if(filterdata.length != 0){
      data = filterdata
      console.log("2 ", data)
    }
    else{
      data = this.temp
    }
   
  }
  
}
export interface Element {
  name: string;
  state: string;
  country: string;
  pincode: string;
  organization: string;
}

let data: Element[] = [
  {name: 'Sagar', state: 'Gujarat', country: 'India', pincode:'360002', organization: 'TatvaSoft'},
  {name: 'Viraj', state: 'Rajasthan', country: 'India', pincode:'363783', organization: 'Google'},
  {name: 'Ajay', state: 'Maharastra', country: 'India', pincode:'397002', organization: 'Amazon'},
  {name: 'Kashyap', state: 'Gujarat', country: 'India', pincode:'345002', organization: 'TatvaSoft'},
  {name: 'Rahul', state: 'Gujarat', country: 'India', pincode:'360002', organization: 'TatvaSoft'},
  {name: 'Virat', state: 'Rajasthan', country: 'India', pincode:'363795', organization: 'Google'},
  {name: 'Rohit', state: 'Maharastra', country: 'India', pincode:'360002', organization: 'TatvaSoft'},
  {name: 'Hardik', state: 'Rajasthan', country: 'India', pincode:'363795', organization: 'Google'},
  {name: 'Jay', state: 'Rajasthan', country: 'India', pincode:'363795', organization: 'Google'},
  {name: 'Vikas', state: 'Maharastra', country: 'India', pincode:'360002', organization: 'TatvaSoft'},
  {name: 'Mayank', state: 'Rajasthan', country: 'India', pincode:'363795', organization: 'Google'},
]

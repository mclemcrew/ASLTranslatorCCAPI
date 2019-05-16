import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { map } from "rxjs/operators";
// import { Subject } from 'rxjs/Rx';

@Injectable()
export class CameraService {

  IP_ADDRESS = "";
  PORT = "";

  BASE_URL = 'http://' + this.IP_ADDRESS + ':' + this.PORT +'/ccapi/ver100/'; // Uncomment when deploying to server 

  pcn = [];
  reviewpcn = [];
  gatepcn = [];
  inprogresspcn = [];
  completedpcn = [];

  constructor(private http: HttpClient) { }

  testBattery() {
    console.log("This was tested");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    let baseUrl = 'http://' + this.IP_ADDRESS + ':' + this.PORT +'/ccapi/ver100/'; 
    return this.http.get(baseUrl + 'devicestatus/battery' );
  }

  halfPress() {
    let headers = new Headers();
    let id = {"action":"half_press", "af":true};
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let baseUrl = 'http://' + this.IP_ADDRESS + ':' + this.PORT +'/ccapi/ver100/';
    return this.http.post(baseUrl + 'shooting/control/shutterbutton/manual', id).pipe(map(res => {
      console.log(res);
    }));
  }

  fullPress() {
    let headers = new Headers();
    let id = {"action":"full_press", "af":true};
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let baseUrl = 'http://' + this.IP_ADDRESS + ':' + this.PORT +'/ccapi/ver100/';
    return this.http.post(baseUrl + 'shooting/control/shutterbutton/manual', id).pipe(map(res => {
      console.log(res);
    }));
  }

  releasePress() {
    let headers = new Headers();
    let id = {"action":"release", "af":true};
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let baseUrl = 'http://' + this.IP_ADDRESS + ':' + this.PORT +'/ccapi/ver100/';
    return this.http.post(baseUrl + 'shooting/control/shutterbutton/manual', id).pipe(map(res => {
      console.log(res);
    }));
  }

  highSpeed() {
    let headers = new Headers();
    let id = {"value":"highspeed"};
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let baseUrl = 'http://' + this.IP_ADDRESS + ':' + this.PORT +'/ccapi/ver100/';
    return this.http.put(baseUrl + 'shooting/settings/drive', id).pipe(map(res => {
      console.log(res);
    }));
  }
}

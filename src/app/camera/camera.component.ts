import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  IP_ADDRESS = "";
  PORT = "";
  constructor(private camera: CameraService,private router: ActivatedRoute, private routing: Router) {
    
  }

  ngOnInit() {
  }

  onChangeAddress() {
    this.camera.IP_ADDRESS = this.IP_ADDRESS;
    this.camera.PORT = this.PORT;
  }

  checkAddress() {
    console.log(this.camera.IP_ADDRESS);
    console.log(this.camera.PORT);
    this.camera.testBattery();
    this.routing.navigate(['/split']);
  }

}

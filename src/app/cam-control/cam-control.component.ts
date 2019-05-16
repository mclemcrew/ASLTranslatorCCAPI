import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';
import {deserialize} from "serializer.ts/Serializer";

@Component({
  selector: 'app-cam-control',
  templateUrl: './cam-control.component.html',
  styleUrls: ['./cam-control.component.css']
})
export class CamControlComponent implements OnInit {

  constructor(private toastService: MzToastService,private camera: CameraService,private router: ActivatedRoute, private routing: Router) { }

  prepTime = "";
  durationOfShot = "";

  showToast() {
    this.toastService.show('Battery level is good to go! :D', 4000, 'green', () => console.log('Toast has been dismissed'));
  }

  ngOnInit() {
  }

  goBack() {
    this.routing.navigate(['/split']);
  }

  // Grabs all the Downloads from the database and stores them in the database service
  getBatteryInfo() {
    this.camera.testBattery()
    .subscribe(
      (response) => {
        // const parsedData = response;
        let battery = deserialize<Battery[]>(Battery, response);
        // if(battery[0].quality!="bad"){
        //   this.showToast();
        // };
        this.showToast();
      }, (error) => {
        console.log(error);
      }
    );
  }

  steadyCamera() {
    this.camera.halfPress().subscribe(
      (response) => {
        // const parsedData = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }

  takePicture() {
    this.camera.fullPress().subscribe(
      (response) => {
        // const parsedData = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }

  stopPicture() {
    this.camera.releasePress().subscribe(
      (response) => {
        // const parsedData = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }

  setSpeed() {
    this.camera.highSpeed().subscribe(
      (response) => {
        // const parsedData = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }

  callCamera() {
    this.setSpeed();
    setTimeout(() => {
    console.log("steady camera");
    this.steadyCamera();
    this.callShot()
    }, parseInt(this.prepTime)*1000);
  }

  callShot() {
    setTimeout(() => {
    this.takePicture();
    console.log("take picture");
    this.cancelShot();
  }, 1500);
  }

  cancelShot() {
    setTimeout(() => {
    this.stopPicture();
    console.log("stop picture");
  }, parseInt(this.durationOfShot)*1000);
  }

}

export class Battery {
  name: String;
  kind: String;
  level: String;
  quality: String;
}
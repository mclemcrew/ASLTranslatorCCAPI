import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { MzToastService } from 'ng2-materialize';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-gesture-recognition',
  templateUrl: './gesture-recognition.component.html',
  styleUrls: ['./gesture-recognition.component.css']
})
export class GestureRecognitionComponent implements OnInit {

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // this.loadScript('assets/js/opencv.js');
    document.getElementById("gesture-div").style.display = "inline";
  }

  constructor(private route: ActivatedRoute,private router: Router,private camera: CameraService) {
    
  }


  

}

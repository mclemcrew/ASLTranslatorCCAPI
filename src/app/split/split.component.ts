import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {

  constructor(private camera: CameraService,private router: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
  }

  goToCameraControl() {
    this.routing.navigate(['/cam-control']);
  }

  goToLive() {
    this.routing.navigate(['/live']);
  }

}

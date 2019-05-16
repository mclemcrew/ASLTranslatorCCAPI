import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CameraService } from './camera.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { MzToastService } from 'ng2-materialize';
import { CookieStorage, LocalStorage, SessionStorage,LocalStorageService } from 'ngx-store';
import { MzInputModule, MzToastModule, MzCardModule } from 'ngx-materialize'

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { GestureRecognitionComponent } from './gesture-recognition/gesture-recognition.component';
import { SplitComponent } from './split/split.component';
import { CamControlComponent } from './cam-control/cam-control.component';

const appRoutes: Routes =[
  { path: 'camera', component: CameraComponent },
  { path: 'cam-control', component: CamControlComponent },
  { path: 'live', component: GestureRecognitionComponent },
  { path: 'split', component: SplitComponent},
  // { path: 'landing', component: LandingComponent},
  { path: '**', redirectTo: 'camera'}
];

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    GestureRecognitionComponent,
    SplitComponent,
    CamControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MzInputModule,
    MzCardModule,
    MzToastModule
  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }

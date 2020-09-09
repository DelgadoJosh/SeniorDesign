import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { isUndefined } from 'util';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})


export class ControlsComponent implements OnInit {

  movementState: Ihash;

  constructor(private app: AppComponent) {
  }

  ngOnInit(): void {
    this.setMovementStates();
  }

  setMovementStates() {
    this.movementState = { 'forward': false, 'backward': false, 'left': false, 'right': false };
  }

  onClick(button) {
    // TODO call server, if the server could return set speed that would be perfect.
  }

  onClickD(button) {
    //TODO contact server with button (if the server could return true on sucessfully recieving info)
    this.movementState[button] = true;
    window.alert(this.movementState[button])
  }

  onClickR(button) {
    if (!isUndefined(this.movementState[button]) && this.movementState[button]) {
      //TODO contact server with button
      this.movementState[button] = false;
      window.alert(this.movementState[button])
    }
  }

}

interface Ihash {
  [key: string]: boolean;
}
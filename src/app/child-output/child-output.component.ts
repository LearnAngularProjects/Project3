import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent {
  text: string = "";

  @Output()
  bindEmitter: EventEmitter<string> = new EventEmitter<string>();

  getTextFromInputBox() {
    this.bindEmitter.emit(this.text);
    console.log(this.text);
  }
}

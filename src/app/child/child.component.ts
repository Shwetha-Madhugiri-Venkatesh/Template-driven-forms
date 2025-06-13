import { Component, EventEmitter, Injectable, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
@Injectable({
  providedIn:'root',
})
export class ChildComponent {
  text:string="hi";
  
  child_event:EventEmitter<string>= new EventEmitter<string>;

  emitter(){
    this.child_event.emit(this.text);
  }

  emitting(){
    this.emitter();
  }
}

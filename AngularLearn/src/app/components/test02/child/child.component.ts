import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  _title: string;


//   如果需要在`AfterViewChecked` 之后改变值的话  引入 ngZone
  constructor(private ngXone: NgZone) {
    this._title = 'hello';
   }

  ngOnInit() {
  }

  public get title(): string {
    console.log('脏值检测');

    return this._title;
  }


}

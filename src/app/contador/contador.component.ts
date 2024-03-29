import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {

  @Input() Id: number;
  @Input() Name: string;
  @Input() Score: number;

  increment() {
    this.Score++;
  }

  decrement() {
    if (this.Score > 0)
      this.Score--;
  }

  constructor() { }

  ngOnInit() {}

}

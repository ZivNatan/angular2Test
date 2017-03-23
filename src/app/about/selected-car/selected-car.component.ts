import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.css']
})
export class SelectedCarComponent implements OnInit {
  @Input() car;
  constructor() { }

  ngOnInit() {
  }

}

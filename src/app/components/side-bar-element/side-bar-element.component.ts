import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-element',
  templateUrl: './side-bar-element.component.html',
  styleUrls: ['./side-bar-element.component.scss']
})
export class SideBarElementComponent implements OnInit {
  @Input() iconText!: string;
  @Input() icon: any;
  constructor() { }

  ngOnInit(): void {
  }

}

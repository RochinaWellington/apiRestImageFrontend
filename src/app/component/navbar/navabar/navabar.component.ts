import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {
  @Input() tipo_navbar!:String; // ? variable para identificar que navvbar se usura
  constructor() { }

  ngOnInit(): void {
  }

}

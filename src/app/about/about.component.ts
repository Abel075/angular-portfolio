import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  resumePdf: string = "assets/resume.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.css']
})
export class ToolbarClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open() {
    var x = document.getElementById("myNavbar");
    console.log(x.className)
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
  }
}

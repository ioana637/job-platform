import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-provider',
  templateUrl: './toolbar-provider.component.html',
  styleUrls: ['./toolbar-provider.component.css']
})
export class ToolbarProviderComponent implements OnInit {

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

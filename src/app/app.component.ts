import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localstorage';
  
  getitem: string | null;

  constructor() {
    // Use setItem to store data in local storage
    localStorage.setItem("local", "Hello world");

    // Use getItem to retrieve data from local storage
    this.getitem = localStorage.getItem("local");
  }

  ngOnInit(): void {
    // You can perform additional initialization here if needed
  }
}

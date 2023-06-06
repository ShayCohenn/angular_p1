import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter = 0;

  

  ngOnInit(): void {
    setInterval(() => this.battleInit(), 2000);
  }


  battleInit(): void {
    this.counter += 1;
  }
}

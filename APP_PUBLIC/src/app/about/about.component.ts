import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  pageContent = {
    header: {
      title: 'ABOUT US',
    },
  };

  constructor(private titleServie: Title) {}

  ngOnInit(): void {
    this.titleServie.setTitle('About Us');
  }
}
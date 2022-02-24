import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
})
export class FrameworkComponent implements OnInit {
  constructor(private titleServie: Title) {}

  ngOnInit(): void {
    this.titleServie.setTitle('REWIND - A music store');
  }
}

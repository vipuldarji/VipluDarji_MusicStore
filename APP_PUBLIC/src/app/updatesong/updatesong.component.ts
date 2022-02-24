import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-updatesong',
  templateUrl: './updatesong.component.html',
  styleUrls: ['./updatesong.component.css'],
})
export class UpdatesongComponent implements OnInit {
  constructor(private titleServie: Title) {}

  ngOnInit(): void {
    this.titleServie.setTitle('Update');
  }
}

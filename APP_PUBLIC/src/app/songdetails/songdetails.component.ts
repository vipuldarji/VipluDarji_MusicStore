import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css'],
})
export class SongdetailsComponent implements OnInit {
  constructor(private titleServie: Title) {}

  ngOnInit(): void {
    this.titleServie.setTitle('Details');
  }
}

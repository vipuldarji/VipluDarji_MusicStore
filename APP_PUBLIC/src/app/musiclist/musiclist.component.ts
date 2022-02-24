import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css'],
})
export class MusiclistComponent implements OnInit {
  constructor(private titleServie: Title) {}

  ngOnInit(): void {
    this.titleServie.setTitle('Music List');
  }
}

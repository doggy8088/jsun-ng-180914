import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: string[];

  constructor(private datasvc: DataService) { }

  ngOnInit() {
    this.datasvc.getTags().subscribe(v => {
      this.tags = v;
    })
  }

}

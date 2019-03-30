import { Component, OnInit } from '@angular/core';
import { Repo } from './../models/repo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datail',
  templateUrl: './datail.page.html',
  styleUrls: ['./datail.page.scss'],
})
export class DatailPage implements OnInit {
  repo: Repo;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.repo = <Repo>param;        
    });
 }

  ngOnInit() {
  }

}

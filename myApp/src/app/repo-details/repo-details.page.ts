import { Component, OnInit } from '@angular/core';
import { Repo } from './../models/repo';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.page.html',
  styleUrls: ['./repo-details.page.scss'],
})
export class RepoDetailsPage implements OnInit {
  repo: Repo;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.repo = <Repo>param;        
    });
  }

  ngOnInit() {
  }

}

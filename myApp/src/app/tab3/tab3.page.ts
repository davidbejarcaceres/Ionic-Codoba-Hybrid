import { ReposService } from './../repos.service';
import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Repo } from './../models/repo';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

@Injectable()
export class Tab3Page {
  username: string;
  repos: Repo[];

  constructor(public http: Http, private reposProvider: ReposService, public navCtrl: NavController) {
  }
  
  getRepo(username){
    // this.http.get(`https://api.github.com/users/${username}/repos`).subscribe(data => {this.repos = <Repo[]>data.json(); console.log(this.repos);
    // });    
    this.reposProvider.getRepos(username).subscribe(async reposArray => {
      this.repos = <Repo[]>reposArray;
    })    
  }

  navegaDetalle(repo: Repo){
    this.navCtrl.navigateForward(['/datail', { repo: repo }]);
  }
  ionViewDidLoad() {  }
}

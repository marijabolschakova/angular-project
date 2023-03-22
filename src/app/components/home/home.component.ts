import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/models/model-api';
import { tmdbService } from 'src/app/services/tmdb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subs: Subscription[] = []
  nowPlaying!: Movies;
  animation!: Movies;
  adventure!: Movies;
  upComing!: Movies;
  fantasy!: Movies;
  family!: Movies;

  constructor(public tmdb: tmdbService ) {}

  ngOnInit(): void {
    this.subs.push(this.tmdb.getNowPlayingMovie().subscribe((res: Movies) => this.nowPlaying  =res));
    this.subs.push(this.tmdb.getAnimation().subscribe((res: Movies) => this.animation  =res));
    this.subs.push(this.tmdb.getAdventure().subscribe((res: Movies) => this.adventure  =res));
    this.subs.push(this.tmdb.getUpComing().subscribe((res: Movies) => this.upComing  =res));
    this.subs.push(this.tmdb.getFantasy().subscribe(res => this.fantasy  =res));
    this.subs.push(this.tmdb.getFamily().subscribe((res: Movies) => this.family  =res));

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }


}

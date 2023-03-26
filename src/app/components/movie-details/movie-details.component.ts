import { Component } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {tmdbService} from "../../core/services/tmdb.service";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  public id: number | undefined;
  movie: any = {};
  casts: any = [];
  crew: any = [];
  headerBGUrl!: string;
  overview!: string;

  constructor(
    private ms: tmdbService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getCast(this.id);
      this.getCrew(this.id);
      this.ms.getMovie(params['id']).subscribe(res => {
        this.movie = res;
        this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path;
      })
    });
  }

  getCast(id: number | undefined) {
    this.ms.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getCrew(id: number | undefined) {
    this.ms.getMovieCredits(id).subscribe((res: any) => {
      this.crew = res.crew;
    });
  }

  config: SwiperOptions = {
    spaceBetween: 10,
    navigation: false,
    scrollbar: { draggable: true },
    autoplay: {
      delay: 2800
    },
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4.7
      },
      1280: {
        slidesPerView: 5
      },
      1620: {
        slidesPerView: 7
      }
    }
  };
}

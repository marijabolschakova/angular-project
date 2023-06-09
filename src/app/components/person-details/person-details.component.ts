import { Component } from '@angular/core';
import {
  Cast, Movies,
  tmdbService
} from "../../core/services/tmdb.service";
import {ActivatedRoute} from "@angular/router";
import {SwiperOptions} from "swiper";
import {map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
  public id: number | undefined;
  person: Cast | undefined;
  person_cast: Movies[] = [];

  constructor(
    private ms: tmdbService,
    private route: ActivatedRoute,
  ) { }

  public personId$: Observable<string> = this.route.params.pipe(
    map(value => value['id'])
  )

  public personDetails = this.personId$.pipe(
    switchMap(id => this.ms.getPersonDetail(id))
  ).subscribe((res) => {
    this.person = res;
  })

  public personCast = this.personId$.pipe(
    switchMap(id => this.ms.getPersonCast(id))
  ).subscribe((res) => {
    this.person_cast = res;
  })

  ngOnDestroy(): void {
    this.personDetails.unsubscribe();
    this.personCast.unsubscribe();
  }

  config: SwiperOptions = {
    spaceBetween: 10,
    navigation: false,
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

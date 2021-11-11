import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(
    private cookieService: CookieService,
  ) { }

  addData(): void {
    let duck = this.cookieService.get('duck');
    if (!duck) { duck = "" + 0 }
    this.cookieService.set('duck', "" + (+duck + 1))
  }

  getData(): Observable<string> {
    return timer(1000, 1000).pipe(
      map(() => this.cookieService.get('duck'))
    )
  }

}

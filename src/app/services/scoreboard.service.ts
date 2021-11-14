import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardService {
  constructor(private cookieService: CookieService) {}

  updateData(key: string, value: string) {
    this.cookieService.set(key, value);
  }

  addOne(key: string) {
    let oldValue = this.cookieService.get(key);
    if (!oldValue) {
      oldValue = '' + 0;
    }
    this.cookieService.set(key, '' + (+oldValue + 1));
  }

  subsOne(key: string) {
    let oldValue = this.cookieService.get(key);
    if (!oldValue) {
      oldValue = '' + 0;
    }
    this.cookieService.set(key, '' + (+oldValue - 1));
  }

  clear(key: string) {
    this.cookieService.delete(key);
  }

  clearAll() {
    this.cookieService.deleteAll();
  }

  changeBooleanValue(key: string) {
    let oldValue = this.cookieService.get(key);
    if (!oldValue) {
      oldValue = 'false';
    }
    this.cookieService.set(key, '' + !(oldValue === 'true'))
  }

  getData(key: string): Observable<string> {
    return timer(1000, 1000).pipe(map(() => this.cookieService.get(key)));
  }
}

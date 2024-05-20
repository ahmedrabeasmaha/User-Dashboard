import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchText = new BehaviorSubject<any>('');
  constructor() { }
  SearchId(value: any) {
    this.searchText.next(value);
  }
  getSearchId() {
    return this.searchText.asObservable();
  }
}

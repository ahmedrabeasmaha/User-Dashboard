import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import { SearchService } from '../../services/search/search.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private searchService: SearchService, private _location: Location, public router: Router, private _cdref: ChangeDetectorRef) {
  }
  public searchText:any;

  ngOnInit(): void {
    this.searchService.SearchId('');
  }
  Update(event: any) {
    console.log(event.target.value)
    this.searchService.SearchId(event.target.value);
  }
  goBack() {
    this._location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { SearchService } from '../../services/search/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {'class': 'd-flex flex-grow-1 flex-column'}
})
export class HomeComponent implements OnInit {
  public users: any;
  public pagination: number = 1;
  public total!: number;
  public searchText!: string;

  constructor (private _usersService: UsersService, private _searchService: SearchService, private _router: Router) {
    this.searchText = '';
  }
  async ngOnInit(): Promise<any> {
    await this.getUsers();
    this._searchService.getSearchId().subscribe(text => {
      this.searchText = text;
    })
  }
  async getUsers(): Promise<any> {
    this._usersService.getUsers(this.pagination).subscribe((res: any) => {
        this.users = res.data;
        this.total = res.total;
      });
  }

  async renderPage(event: number): Promise<any> {
    this.pagination = event;
    await this.getUsers();
  }

  async showUser(id: number) {
    this._router.navigate(['/user', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  host: {'class': 'd-flex flex-grow-1 flex-column'}
})
export class UserComponent implements OnInit {
  public user: any;
  private id!: number;
  constructor(private _userService: UserService, private _route: ActivatedRoute) {}

  async ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    await this.getUserData();
  }
  async getUserData(): Promise<any> {
    this._userService.getUser(this.id).subscribe((res: any) => {
        this.user = res.data;
        console.log(res.data.avatar)
      });
  }

}

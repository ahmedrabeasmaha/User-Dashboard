import { HttpClient, HttpContext } from '@angular/common/http';
import { Component } from '@angular/core';
import { SkipLoading } from '../../interceptors/loading/loading.interceptor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private httpClient: HttpClient) {
    
  }
  makeRequest() {
    this.httpClient
            .get('https://jsonplaceholder.typicode.com/todos/1',{context:new HttpContext().set(SkipLoading, false)})
            .subscribe((res) => {
                console.log(res);
            });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

interface GithubResponse{
  incomplete_results: boolean,
  items:  any[],
  total_count: number
}


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getProjects(searchText){
    if(searchText){
      const url = `https://api.github.com/search/repositories`;

      const params = new HttpParams().set('q', searchText);
      const headers = new HttpHeaders().set('Content-Type', 'text/html');

      this.http.get<GithubResponse>(url, {params, headers})
        .subscribe(
          response => {
            this.projects.next(response.items);
          }
        )
    }
  }
}

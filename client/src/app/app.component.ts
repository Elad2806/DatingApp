import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to plural form
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private http: HttpClient) {}
  data : any;
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe(data => {
      this.data = data;
    });
  }
}
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Monty Hall Problem Simulation';
  simulations: number = 1000;
  switchDoor: boolean = true;
  result: any = null;

  constructor(private http:HttpClient) {}

  startSimulation() {
    const payload = {
      simulations: this.simulations,
      switchDoor: this.switchDoor
    };

    this.http.post('http://localhost:5032/api/montyhall/simulate', payload).subscribe(response => {
        this.result = response;
      }, error => {
        console.error('Error occurred during simulation', error);
      });
  }
}


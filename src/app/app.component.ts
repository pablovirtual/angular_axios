import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'integrador-final-angular';
  todos: Todo[] = [];
  loading: boolean = true;
  error: string | null = null;

  async ngOnInit() {
    try {
      //peticion GET a la API usando Axios
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
      this.todos =response.data;
      this.loading = false;
    } catch (err) {
      this.error = 'Error al cargar los datos';
      this.loading = false;
      console.error('Error al obtener los datos:', err)
    }
  }
}

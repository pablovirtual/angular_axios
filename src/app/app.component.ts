import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';

/**
 * Interfaz que define la estructura de los datos de tareas (todos)
 * obtenidos de la API JSONPlaceholder
 * @interface Todo
 */
interface Todo {
  userId: number;  // ID del usuario asociado a la tarea
  id: number;      // ID único de la tarea
  title: string;   // Título descriptivo de la tarea
  completed: boolean; // Estado de completado de la tarea
}

/**
 * Componente principal de la aplicación.
 * Gestiona la obtención de datos de tareas desde JSONPlaceholder API
 * y su presentación en formato de tabla.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  /** Título de la aplicación */
  title = 'integrador-final-angular';
  
  /** Array para almacenar las tareas obtenidas de la API */
  todos: Todo[] = [];
  
  /** Indicador de estado de carga */
  loading: boolean = true;
  
  /** Mensaje de error en caso de fallo en la petición */
  error: string | null = null;

  /**
   * Método del ciclo de vida que se ejecuta al iniciar el componente.
   * Realiza la petición a la API para obtener los datos.
   * @async
   * @returns {Promise<void>}
   */
  async ngOnInit() {
    try {
      // Petición GET a la API usando Axios
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
      this.todos = response.data;
      this.loading = false;
    } catch (err) {
      this.error = 'Error al cargar los datos';
      this.loading = false;
      console.error('Error al obtener los datos:', err)
    }
  }
}

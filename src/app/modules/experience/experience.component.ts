import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  language: number = 0;
  constructor(private languageService: LanguageService) { }
  text: string[] = [""];
  ngOnInit(): void {
    this.language = this.languageService.getlanguage();
    if (this.language == 0) {
      this.text = [
        "Se creó una aplicación web para manejar cursos universitarios, profesores, materias, clases y estudiantes. puede producir informes de clase con detalles sobre el maestro, el estudiante, los exámenes parciales, la evidencia y las calificaciones.",
        "Contribuí al desarrollo back-end de una aplicación web usando Django, construyendo API web con Django Marco de descanso.",
        "Otra de mis responsabilidades fue implementar Simple JWT para agregar autenticación al acceso a las API.",
        "En el desarrollo front-end, construido con Vue.js, creé y diseñé vistas usando Tailwind CSS. Estos las vistas interactuaban con las tablas de la base de datos consumiendo los servicios backend.",
        "La base de datos de la aplicación se implementó utilizando el sistema de gestión de bases de datos SQLite."
      ];
      return;
    }
    this.text = [
      "A web application was created to manage university courses, teachers, subjects, classes and students. can produce class reports with details about teacher, student, midterms, evidence and grades.",
      "Contributed to back-end development of a web application using Django, building web API with Django Rest framework.",
      "Another of my responsibilities was to implement Simple JWT to add authentication to API access.",
      "In front-end development, built with Vue.js, I created and styled views using Tailwind CSS. These views interacted with the database tables consuming the backend services.",
      "The application database was implemented using the SQLite database management system."
    ];
  }
}

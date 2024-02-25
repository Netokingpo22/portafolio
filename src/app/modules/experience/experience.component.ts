import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{
  language: number = 0;
  constructor(private languageService: LanguageService) { }
  textItesca: string[] = [""];
  textClever: string[] = [""];
  textZith: string[] = [""];
  ngOnInit(): void {
    this.language = this.languageService.getlanguage();
    if (this.language == 0) {
      this.textItesca = [
        "Pasantía - Desarrollador de software", "ITESCA, Sep 2023 - Actual",
        "Se creó una aplicación web para manejar cursos universitarios, profesores, materias, clases y estudiantes. Permitiendo producir informes de las clases con detalles sobre el maestro, los estudiantes, los exámenes parciales, la evidencia y las calificaciones.",
        "Una de mis tareas fue el desarrollo del back-end usando ", "Django", ", construyendo las API con ", "Django REST framework.",
        "Otra de mis responsabilidades fue implementar ", "Simple JWT", " para agregar autenticación al acceso a las API.",
        "En el desarrollo front-end, creado con ", "Vue.js", ", desarrollé y diseñé vistas usando ", "Tailwind CSS", ". Estas vistas interactúan con las tablas de la base de datos al consumir los servicios de back-end.",
        "La base de datos se implementó utilizando el sistema de gestión de bases de datos ", "SQLite."
      ];
      this.textClever = [
        "Pasantía - Desarrollador de software", "Clever Cloud, Jul 2023 - Sep 2023",
        "En Clever Cloud, trabajé en una aplicación de escritorio que incluía diversas funciones como: gestión de punto de venta, administración de inventario, manejo de proveedores, inicio de sesión, generación de informes de ventas y emisión de tickets.",
        "La aplicación fue desarrollada en", " Java", ", arreglé la funcionalidad de algunos módulos, corregí errores de UI y optimicé el código.",
        "Usamos ", "SCRUM", ", las tareas se asignaron vía ", "Jira", " y la comunicación fue a través de", " Slack.",
        "Se utilizó ", "Bitbucket", " para el control de versiones y ", "MySQL", " como sistema de gestión de la base de datos."
      ];
      this.textZith = [
        "Pasantía - Desarrollador de software", "Zitheonsoft, Ago 2022 - May 2023",
        "Zitheonsoft estaba proporcionando un software como servicio y se me asignó la tarea de desarrollar e implementar un módulo de ventas donde los usuarios que quisieran adquirir el servicio pudieran realizar la transacción.",
        "Desarrollé el backend con ", " Spring Boot", ", migré la estructura de una base de datos diseñada para manejar suscripciones SaaS y usé ", "JPA", " para la persistencia de datos.",
        "Implemente ", "Spring Security", " para agregar autenticación con ", "JWT ", "y configure el ", "CORS ", "para aceptar solo los métodos, encabezados y URL de origen permitidos.",
        "Trabajé en el front-end, que era una landing page creada con ", "Angular", ", creé vistas de transacciones y código optimizado para funciones como registro de usuario, inicio de sesión y autenticación ", "JWT",
        "Usamos", " Openpay", " para transacciones, cifrando y validando datos de tarjetas en el front-end y ejecutando transacciones en el back-end."
      ];
      return;
    }
    this.textItesca = [
      "Internship - Software developer", "ITESCA, Sep 2023 - Current",
      "A web application was created to manage university courses, teachers, subjects, classes and students. Allowing you to produce class reports with details about the teacher, students, midterms, evidence and grades.",
      "One of my tasks was the development of the back-end using ", "Django", ", building the APIs with the ", "Django REST framework.",
      "Another of my responsibilities was to implement ", "Simple JWT", " to add authentication to APIs access.",
      "In the front-end development, built with ", "Vue.js", ", I developed and styled views using ", "Tailwind CSS", ". These views interact with database tables by consuming the backend services.",
      "The application’s database was implemented using ", "SQLite."
    ];
    this.textClever = [
      "Internship - Software developer", "Clever Cloud, Jul 2023 - Sep 2023",
      "At Clever Cloud, I worked on a desktop application that included various features such as: point of sale management, inventory management, supplier management, login, sales reporting, and ticketing.",
      "The app was developed in ", " Java", ", I fixed some modules functionality, corrected UI errors, and optimized code.",
      "We used ", "SCRUM", ", the tasks were assigned via ", "Jira", " and the communication was through", " Slack.",
      "", "Bitbucket", " was used for version control and ", "MySQL", " was used as the database management system."
    ];
    this.textZith = [
      "Internship - Software developer", "Zitheonsoft, Agu 2022 - May 2023",
      "Zitheonsoft was providing a software as a service, and I was assigned the task of developing and implementing a sales module where users who wanted to purchase the service could make the transaction.",
      "Developed the backend with ", " Spring Boot", ", migrated the structure of a database designed to handle SaaS subscriptions, and used ", "JPA", " for data persistence.",
      "Deploy  ", "Spring Security", " to add authentication with ", "JWT ", "and configure the ", "CORS ", "to accept only the allowed methods, headers, and origin URLs.",
      "I worked on the front-end, which was a landing page built with ", "Angular", ", created transaction views, and optimized code for features like user registration, login, and ", "JWT authentication.",
      "We used", " Openpay", " for transactions, encrypting and validating card data on the front-end, and executing transactions on the back-end."
    ];
  }
}

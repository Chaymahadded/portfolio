import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faJsSquare,
  faJava,
  faGitAlt,
  faAngular,
  faPython,
  faDocker,
  faFlutter,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'], // Notez la correction du nom `styleUrls`
})
export class AboutMeComponent {
  techIcons = [
    { icon: faJsSquare, name: 'JavaScript' },
    { icon: faJava, name: 'Java' },
    { icon: faPython, name: 'Python' },
    { icon: null, name: 'C#', iconClass: 'cSharp-icon' },
    { icon: null, name: 'Spring Boot', iconClass: 'spring-icon' },
    { icon: faAngular, name: 'Angular' },
    { icon: faFlutter, name: 'Flutter' },
    { icon: faGitAlt, name: 'Git' },
    { icon: faDocker, name: 'Docker' },
    { icon: null, name: 'MySQL' ,iconClass: 'mySql-icon' },
    { icon: null, name: 'SQL Server' , iconClass: 'sqlServe-icon' },
  ];

  ToolsIcons = [
    { icon: faAndroid, name: 'Android Studio' },
    { icon: null, name: 'Vs Code', iconClass: 'vscode-icon' },
    { icon: null, name: 'Eclipse', iconClass: 'eclipse-icon' },
    { icon: null, name: 'IntelliJ' ,iconClass: 'intellij-icon' },
    { icon: null, name: 'Miscrosoft Azure Devops', iconClass: 'azure-icon' },
    { icon: null, name: 'Postman' , iconClass: 'postman-icon' },
    { icon: null, name: 'Xampp' , iconClass: 'xampp-icon' },
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gallery, GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, GalleryModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  selectedProject: any = null;
  galleryItems: GalleryItem[] = [];
  projects = [
    {
      imgPath: '../../assets/images/dashboard.png',
      title: 'Event Planner 2.0',
      description: "Enhance the 'Event Planner' web application by integrating the following features: Coordinate various types of events and requests, Dynamically create feedback forms, Advanced venue searche and smart accommodation recommendations, Automated email notifications and track tasks, Provide real-time budget insights and generate annual reports ana Generate innovative event ideas tailored to upcoming holidays, seasons, and the cultural and religious context of the company and the country.",
      //ghLink: '',
      demoAssets: ['../../assets/images/demo/EventPlanner2.0/eventplanner.mp4'],
      demoType : 'video',
    },
    {
      imgPath: '../../assets/images/accueil_admin.png',
      title: 'Event Planner',
      description: 'An innovative web application for event planning, specifically tailored to the needs of Freedom of Dev Tunisie, enabling: Coordination of all events, Monitoring preparations, Managing event requests, Administering roles, and Managing invitations and accompanying guests.',
      //ghLink: '',
      demoAssets: ['../../../assets/images/demo/EventPlanner/accueil_admin.png',
        '../../../assets/images/demo/EventPlanner/login.png',
        '../../../assets/images/demo/EventPlanner/inscription.png',
        '../../../assets/images/demo/EventPlanner/dashboard_admin.png',
        '../../../assets/images/demo/EventPlanner/consultationetajoutdemandefodien.png',
        '../../../assets/images/demo/EventPlanner/demandes event admin.png',
        '../../../assets/images/demo/EventPlanner/liste evenements admin.png',
        '../../../assets/images/demo/EventPlanner/modal affichage participants admin.png',
        '../../../assets/images/demo/EventPlanner/taches injoy.png'],
      demoType : 'gallery',
    },
    {
      imgPath: '../../assets/images/cv.png',
      title: 'CV Flutter Application',
      description: 'This Flutter mobile application enables CV management for two users. Each user can log in with a username and password to access their own CV. The main objective is to provide a simple and secure solution for displaying individual CVs on a mobile platform.',
      //ghLink: 'https://github.com/Chaymahadded/CV_flutter',
      demoAssets: ['../../assets/images/demo/cv/1.png',
      '../../assets/images/demo/cv/2.png',
      '../../assets/images/demo/cv/3.png',
      '../../assets/images/demo/cv/4.png',
      '../../assets/images/demo/cv/5.png',
      '../../assets/images/demo/cv/6.png',],
      demoType : 'gallery',
    },
    {
      imgPath: '../../assets/images/home.png',
      title: 'Fleet Management Application',
      description: "This desktop application enables you to manage your company's vehicle fleet efficiently. It offers functions for managing vehicles, tracking service reminders and generating annual reports.",
      //ghLink: 'https://github.com/Chaymahadded/Gestion-de-Flotte-Automobile',
      demoAssets: [
        '../../../assets/images/demo/GestionFlotte/home.png',
        '../../../assets/images/demo/GestionFlotte/login.png',
        '../../../assets/images/demo/GestionFlotte/register.png',
        '../../../assets/images/demo/GestionFlotte/changepassword.png',
        '../../../assets/images/demo/GestionFlotte/vehicle_file_report.PNG',
        '../../../assets/images/demo/GestionFlotte/addVehicle.png',
        '../../../assets/images/demo/GestionFlotte/list_vehicule_report.PNG',
        '../../../assets/images/demo/GestionFlotte/modify_vehicle.PNG',
        '../../../assets/images/demo/GestionFlotte/assurance.png',
        '../../../assets/images/demo/GestionFlotte/category.PNG',
        '../../../assets/images/demo/GestionFlotte/category_report.PNG',
        '../../../assets/images/demo/GestionFlotte/check_index.png',
        '../../../assets/images/demo/GestionFlotte/maintenance.png',
        '../../../assets/images/demo/GestionFlotte/registration_sticker.png',
        '../../../assets/images/demo/GestionFlotte/repair.png', 
        '../../../assets/images/demo/GestionFlotte/visite.png'],
      demoType : 'gallery',
    },
    {
      imgPath: '../../assets/images/espace_user.PNG',
      title: 'E-commerce Application',
      description: 'E-commerce application developed with ASP.NET. This platform offers complete management of products, categories, sub-categories, consumers, units, suppliers, brands, as well as the ability to manage customer orders. The application supports two types of user: administrator (Admin) and customer (User).',
      //ghLink: 'https://github.com/Chaymahadded/E-commerce_ASP.NET',
      demoAssets: ['../../../assets/images/demo/Ecommerce/espace_admin.PNG',
        '../../../assets/images/demo/Ecommerce/new_product.PNG',
        '../../../assets/images/demo/Ecommerce/list_prd.PNG',
        '../../../assets/images/demo/Ecommerce/edit_product.PNG',
        '../../../assets/images/demo/Ecommerce/delete.PNG',
        '../../../assets/images/demo/Ecommerce/details.PNG',
        '../../../assets/images/demo/Ecommerce/list_order.PNG',
        '../../../assets/images/demo/Ecommerce/espace_user.PNG',
        '../../../assets/images/demo/Ecommerce/liste_cmd_cl.PNG',
        '../../../assets/images/demo/Ecommerce/shopping_car.PNG',
      ],
      demoType : 'gallery',
    },
    {
      imgPath: '../../assets/images/acceuil.png',
      title: 'Vehicle Management Web Application',
      description: "The aim of the project is to develop a web application that will enable users to keep track of their vehicles' mileage, fuel consumption history and maintenance services. This application will also enable users to receive relevant reminders for the maintenance of their vehicles.",
      //ghLink: 'https://github.com/Chaymahadded/vehicule-management',
      demoAssets: ['../../assets/images/demo/stageiit/demo.mp4'],
      demoType : 'video',
    },
    {
      imgPath: '../../assets/images/hiya.png',
      title: 'Hiya Collection Web Site',
      description: 'This project is an e-commerce application developed using PHP, Bootstrap and MySQL. The application includes an administration interface for managing users, products and orders, as well as a user interface allowing customers to browse products, add items to their shopping cart and place orders.',
      //ghLink: 'https://github.com/Chaymahadded/E-commerce_PHP',
      demoAssets: [
      '../../assets/images/demo/hiya/1.png',
      '../../assets/images/demo/hiya/2.png',
      '../../assets/images/demo/hiya/3.png',
      '../../assets/images/demo/hiya/4.png',
      '../../assets/images/demo/hiya/5.png',
      '../../assets/images/demo/hiya/6.png',
      '../../assets/images/demo/hiya/7.png',
    ],
    demoType : 'gallery',
    },
    {
      imgPath: '../../assets/images/choix_image.png',
      title: 'Deep Learning Breast Cancer Diagnosis',
      description: "TThis project uses deep learning techniques, in particular convolutional neural networks (CNNs) and support vector machines (SVMs), to diagnose breast cancer from histopathological images. The project focuses on the use of the BreakHis database.",
      //ghLink: 'https://github.com/Chaymahadded/D-tection-du-cancer-du-sein-par-deep-learning',
      demoAssets: [
        '../../assets/images/demo/pfeLicence/inter_register.png',
        '../../assets/images/demo/pfeLicence/inter_login1.png',
        '../../assets/images/demo/pfeLicence/intertest.png',
        '../../assets/images/demo/pfeLicence/choix_image.png',
        '../../assets/images/demo/pfeLicence/inter_testé.png',
        '../../assets/images/demo/pfeLicence/modele.PNG',
      ],
      demoType : 'gallery',
    },
    {
      imgPath: '../../assets/images/lunettes.png',
      title: 'Face Overlay application',
      description: 'This project is a Python application designed to superimpose glasses or masks on faces using facial markers. The application can process images and video streams from a webcam.',
      //ghLink: 'https://github.com/Chaymahadded/Application-Superposition-Visages',
      demoAssets: [
        '../../assets/images/demo/stageLicence/1.png',
        '../../assets/images/demo/stageLicence/2.png',
        '../../assets/images/demo/stageLicence/3.png',
      ],
      demoType : 'gallery',
    }
  ];

  constructor(private gallery: Gallery) {}

  openDemoModal(project: any): void {
    this.selectedProject = project;

    if (project.demoType === 'gallery') {
      this.galleryItems = project.demoAssets.map(
        (img: string) => new ImageItem({ src: img, thumb: img })
      );
      this.gallery.ref().load(this.galleryItems);
    }
  }

  closeDemoModal(event: MouseEvent): void {
    event.stopPropagation();
    this.selectedProject = null;
  }
}
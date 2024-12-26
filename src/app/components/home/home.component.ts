import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from '../project/view-project/view-project.component';
interface Photo {
  data: string;
  fileName: string;
  description: string;
}

interface Project {
  name: string;
  role:string;
  description: string;
  features: string;

technologies: string;

category: string;
  thumbnail: {
    data: string;
    fileName: string;
  };
  photos: Photo[];
}

type Projects = {
  [key: string]: Project;
};

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, MatDialogModule],
})
export class HomeComponent implements OnInit {
  activeSection: string = '';
  selectedTab: string = 'personal information';
  menuOpen: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.setActiveSection('Home');
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(section: string): void {
    this.setActiveSection(section);
    this.menuOpen = false;
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
 
  openProjectModal(projectName: string): void {
    const baseUrl = 'https://jere21121878.github.io/personalPortfolio/assets/';
    const projects: Projects = {
      SafeOps: {
        name: "SafeOps",
        role: "Full Stack Developer",
        features: "Comprehensive management system for hygiene and safety, including task tracking, reporting, and user roles",
        technologies: "Angular 15, ASP.NET Core, .NET 6, Entity Framework Core",
        category: "Management System.",
        description: "SafeOps is a management system designed for companies specializing in hygiene and safety. It enables efficient tracking of tasks, detailed reporting, and role-based access for different users. Built with Angular 15 for the front-end and an ASP.NET Core API with .NET 6 and Entity Framework Core for the back-end, the application delivers a robust and user-friendly platform for operational management.",    
        thumbnail: { data: 'https://jere21121878.github.io/personalPortfolio/Projects/SafeOps/home.png', fileName: 'home.png' },
        photos: [
           { data: '/Projects/SafeOps/login.png', fileName: 'login', description: 'It has a role-based authentication system,"administrador","licenciado" and "tecnico" ' },
          { data: '/Projects/SafeOps/1.png', fileName: 'Administrator view', description: 'the administrator is in charge of creating the companies that require the hygiene and safety service.' },
          { data: '/Projects/SafeOps/2.png', fileName: 'Administrator view', description: '' },
          { data: '/Projects/SafeOps/3.png', fileName: 'Administrator view', description: '' },
          { data: '/Projects/SafeOps/4.png', fileName: 'Administrator view', description: 'creating the employees of his company that will offer their service in the requesting company, assigning groups of technicians to the "licenciados"' },
          { data: '/Projects/SafeOps/5.png', fileName: 'Administrator view', description: 'A technical record of the company´s accident history, with precise data on whether the accident occurred during the performance of a supervised task or not, classification of the accident according to the ILO, future considerations to avoid new accidents and more.' },
          { data: '/Projects/SafeOps/6.png', fileName: 'Accident record', description: '' },
          { data: '/Projects/SafeOps/7.png', fileName: 'Accident record', description: 'If an accident occurred during a supervised task, the name of the technician in charge and the A.T.S (Safe Work Analysis) sheet will be displayed.' },
          { data: '/Projects/SafeOps/8.png', fileName: 'Accident record', description: '' },
          { data: '/Projects/SafeOps/9.png', fileName: 'Accident record', description: '' },
          { data: '/Projects/SafeOps/10.png', fileName: 'plan view', description: 'Company plans for precise location' },
          { data: '/Projects/SafeOps/11.png', fileName: 'Calendar of the company', description: 'a calendar of events that will be held in the company, such as drills, training, etc.' },
          { data: '/Projects/SafeOps/12.png', fileName: 'Add event view', description: 'Events will be displayed for all employees assigned to that company' },
          { data: '/Projects/SafeOps/23.png', fileName: 'Licenciad@#64 view', description: '' },
          { data: '/Projects/SafeOps/24.png', fileName: 'Technicians in charge', description: '' },
          { data: '/Projects/SafeOps/25.png', fileName: 'View work view', description: 'Here the "licensee" can assign a task that will be carried out in the company and needs to be supervised by a technician, for example painting a wall.' },
          { data: '/Projects/SafeOps/26.png', fileName: 'Assign new task view', description: '' },
          { data: '/Projects/SafeOps/27.png', fileName: 'Observations', description: 'The licensed professional can also add "observations" made to the technicians, for example if the licensed professional saw that the technician was on his cell phone while supervising a task or the workers did not have the required personal protection elements.' },
          { data: '/Projects/SafeOps/28.png', fileName: 'Observations', description: '' },
          { data: '/Projects/SafeOps/29.png', fileName: 'Observations view', description: '' },
          { data: '/Projects/SafeOps/33.png', fileName: 'View work view', description: 'if the task have an A.T.S made by the technician it would apper here' },
          { data: '/Projects/SafeOps/34.png', fileName: 'View work view', description: 'photos added by the techncian' },
          { data: '/Projects/SafeOps/35.png', fileName: 'View work view', description: '' },
         

          { data: '/Projects/SafeOps/14.png', fileName: 'Tecnichian view', description: '' },
          { data: '/Projects/SafeOps/31.png', fileName: 'List of assigned task', description: '' },
          { data: '/Projects/SafeOps/32.png', fileName: 'Add A.T.S view', description: 'for each assigned task the technician most fill an A.T.S sheet' },

          { data: '/Projects/SafeOps/16.png', fileName: 'Add photo view', description: 'You can also add photos of workers using personal protective equipment and doing the work according to the standard.' },
          { data: '/Projects/SafeOps/17.png', fileName: 'List of "functions"', description: 'Both the Licenciad@#64 and Technician They have a series of functions that will help them in their supervision task, Chemical Products is a database of technical sheets provided by my software on the most used chemical products in the industry, Emergency Protocols are the protocols loaded by the administrator to know what to do in an emergency situation, Tools is a database of technical sheets provided by my software on the most used tools in the industry' },
          { data: '/Projects/SafeOps/18.png', fileName: 'List of "functions"', description: 'Plans is the list of plans of the designated company, history is the list of accidents that have occurred in the company so that they know which accidents can occur, legal is all the legal information about hygiene and safety, in this case in Argentina' },
          { data: '/Projects/SafeOps/19.png', fileName: 'List of chemicals', description: '' },
          { data: '/Projects/SafeOps/20.png', fileName: 'Chemical sheet view', description: '' },
          { data: '/Projects/SafeOps/21.png', fileName: 'Chemical sheet view', description: '' },
          { data: '/Projects/SafeOps/22.png', fileName: 'Company chat', description: 'all the employees assigned to the same company share an group chat' },
          { data: '/Projects/SafeOps/37.png', fileName: 'Front', description: 'for the fron i use Angular' },
          { data: '/Projects/SafeOps/38.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/39.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/40.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/41.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/42.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/43.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/44.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/45.png', fileName: 'Front', description: '' },
          { data: '/Projects/SafeOps/46.png', fileName: 'Back', description: '' },
          { data: '/Projects/SafeOps/47.png', fileName: 'Back', description: '' },
          { data: '/Projects/SafeOps/48.png', fileName: 'Back', description: '' },
          { data: '/Projects/SafeOps/49.png', fileName: 'Back', description: '' },
          { data: '/Projects/SafeOps/50.png', fileName: 'Back', description: '' }
          
        ],
      },
      Notes: {
        name: "Notes",
    role: "Full Stack Developer",
    features: "Create, archive, and organize notes; create categories and associate them with notes.",
    technologies: "Angular 18, ASP.NET Core, .NET 8, Entity Framework Core",
    category: "Productivity Application",
    description: "Notes is a productivity application that allows users to create and manage notes efficiently. Users can archive notes, create categories, and associate categories with specific notes for better organization. Built with Angular 18 for the front-end and an ASP.NET Core API with .NET 8 and Entity Framework Core for the back-end, this application provides a seamless and intuitive note-taking experience.",


        thumbnail: { data: '/Projects/Notes/1.png', fileName: 'about me.png' },
        photos: [
           { data: '/Projects/Notes/2.png', fileName: 'Dashboard', description: 'i use tokens to bring the list of notes and categories that belong to an user' },
          { data: '/Projects/Notes/3.png', fileName: 'Add new note view', description: '' },
          { data: '/Projects/Notes/4.png', fileName: 'Add new category view', description: '' },
          { data: '/Projects/Notes/5.png', fileName: 'Add new note view', description: '' },
          { data: '/Projects/Notes/6.png', fileName: 'List of active notes', description: '' },
          { data: '/Projects/Notes/7.png', fileName: 'View note ', description: '' },
          { data: '/Projects/Notes/8.png', fileName: 'Edit note view', description: '' },
          { data: '/Projects/Notes/9.png', fileName: 'Edit note view', description: '' },
          { data: '/Projects/Notes/10.png', fileName: 'List of archived notes', description: '' },
          { data: '/Projects/Notes/11.png', fileName: 'Front', description: '' },
          { data: '/Projects/Notes/12.png', fileName: 'Front', description: '' },
          { data: '/Projects/Notes/13.png', fileName: 'Back', description: '' },
          { data: '/Projects/Notes/14.png', fileName: 'Back', description: '' },
          { data: '/Projects/Notes/15.png', fileName: 'Back', description: '' },
          { data: '/Projects/Notes/16.png', fileName: 'Back', description: '' },
          { data: '/Projects/Notes/17.png', fileName: 'Back', description: '' },
          { data: '/Projects/Notes/18.png', fileName: 'Back', description: '' }
                   ],
      },  
        Portfolio: {
          name: "Personal Portfolio",
          role: "Full Stack Developer",
          features: "Create and manage skills, education, experience, and projects",
          technologies: "Angular, ASP.NET Core, .NET 8, Entity Framework Core",
          category: "Personal Portfolio.",
          description: "A personal portfolio application designed to showcase skills, education, work experience, and projects. Built with Angular for the front-end and an ASP.NET Core API with .NET 8 and Entity Framework Core for the back-end, this project allows users to easily add, edit, and display their professional profile and achievements.",
       
      
        thumbnail: { data: '/Projects/Portfolio/about me.png', fileName: 'about me.png' },
        photos: [
          { data: '/Projects/Portfolio/1.png', fileName: 'Views', description: '' },
          { data: '/Projects/Portfolio/2.png', fileName: 'Views', description: '' },
          { data: '/Projects/Portfolio/3.png', fileName: 'Views', description: '' },
          { data: '/Projects/Portfolio/8.png', fileName: 'Views', description: '' },

          { data: '/Projects/Portfolio/4.png', fileName: 'Back', description: '' },
          { data: '/Projects/Portfolio/5.png', fileName: 'Back', description: '' },
          { data: '/Projects/Portfolio/6.png', fileName: 'Back', description: '' },
          { data: '/Projects/Portfolio/7.png', fileName: 'Back', description: '' },
          { data: '/Projects/Portfolio/9.png', fileName: 'Front', description: '' },
          { data: '/Projects/Portfolio/10.png', fileName: 'Front', description: '' }
                             ],
      },
      Ecommerce: {
        name: "World Virtual Gallery",
        role: 'Full Stack Developer',
        features: 'User roles: Seller and Buyer. Users can create their own stores, search for products, and add them to the shopping cart.',
        
        technologies: 'Angular, ASP.NET Core, .NET 6, Eff core, Angular Material',
        
        category: 'E-commerce.',
        description: 'World Virtual Gallery is an online platform where users can create virtual stores, browse products, and manage their shopping experience. The application features user roles for both sellers and buyers, allowing sellers to set up their stores and buyers to search, add items to the cart, and proceed to checkout.',
    
    
        thumbnail: { data: '/Projects/Ecommerce/8.png', fileName: 'about me.png' },
        photos: [
          { data: '/Projects/Ecommerce/7.png', fileName: 'Home', description: 'you can search products without login' },
 { data: '/Projects/Ecommerce/9.png', fileName: 'Home', description: '' },
 { data: '/Projects/Ecommerce/10.png', fileName: 'Security', description: '' },
 { data: '/Projects/Ecommerce/12.png', fileName: 'List of products searched', description: '' },
 { data: '/Projects/Ecommerce/13.png', fileName: 'Detaill of product', description: '' },
 { data: '/Projects/Ecommerce/14.png', fileName: 'Login', description: '' },
 { data: '/Projects/Ecommerce/15.png', fileName: 'Register', description: '' },
 { data: '/Projects/Ecommerce/16.png', fileName: 'Register', description: '' },
 { data: '/Projects/Ecommerce/17.png', fileName: 'Seller view', description: 'seller can add stores' },
 { data: '/Projects/Ecommerce/18.png', fileName: 'Store seller view', description: '' },
 { data: '/Projects/Ecommerce/19.png', fileName: 'Cart notifications', description: '' },
 { data: '/Projects/Ecommerce/20.png', fileName: 'Cart detaills', description: '' },
 { data: '/Projects/Ecommerce/21.png', fileName: 'Cart detaills', description: '' },
 
{ data: '/Projects/Ecommerce/1.png', fileName: 'Back', description: '' },
{ data: '/Projects/Ecommerce/2.png', fileName: 'Back', description: '' },
{ data: '/Projects/Ecommerce/3.png', fileName: 'Back', description: '' },
{ data: '/Projects/Ecommerce/4.png', fileName: 'Back', description: '' },
{ data: '/Projects/Ecommerce/5.png', fileName: 'Back', description: '' },
{ data: '/Projects/Ecommerce/6.png', fileName: 'Back', description: '' },
{ data: '/Projects/Ecommerce/11.png', fileName: 'Front', description: '' },
{ data: '/Projects/Ecommerce/22.png', fileName: 'Front', description: '' },
{ data: '/Projects/Ecommerce/23.png', fileName: 'Front', description: '' },
{ data: '/Projects/Ecommerce/24.png', fileName: 'Front', description: '' },
{ data: '/Projects/Ecommerce/25.png', fileName: 'Front', description: '' }
        ],
      },
    };

    // Ensure that projectName is a valid key in the projects object
    const project = projects[projectName as keyof Projects];

    if (project) {
      this.dialog.open(ViewProjectComponent, { width: '800px', data: project });
    } else {
      console.error('Project not found:', projectName);
    }
  }
}

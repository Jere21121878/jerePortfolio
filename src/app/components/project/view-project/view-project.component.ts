import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../../interfaces/project';
 import { Photo } from '../../../interfaces/photo';
 import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
  @Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  standalone: true,
  imports: [SharedModule,MatChipsModule,MatButtonModule],
})
export class ViewProjectComponent {
  hoveredPhoto: any = null; // Foto actual sobre la que se está pasando el mouse
  selectedImage: any = null; // Imagen actualmente seleccionada
  selectedType: 'thumbnail' | 'photo' = 'thumbnail'; // Tipo de imagen seleccionada
  @ViewChild('fileInput') fileInput!: ElementRef;
  showDescriptionInput: boolean = false; // Controla la visibilidad del input
  newDescription: string = ''; // Almacena la nueva descripción

  constructor(
    public dialogRef: MatDialogRef<ViewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project,
   ) {
    // Inicializar la imagen seleccionada con el thumbnail
    this.selectedImage = project.thumbnail;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  selectImage(image: any, type: 'thumbnail' | 'photo'): void 
  { if (!image) { console.error('La imagen seleccionada no es válida:', image); return; } 
  this.selectedImage = image; this.selectedType = type; this.showDescriptionInput = false;
   console.log('Imagen seleccionada:', 
    { description: image.description, fileName: image.fileName }); }
  updateThumbnail(photo: { fileName: string; data: string }): void {
    this.project.thumbnail = photo;
    this.selectedImage = photo;
    this.selectedType = 'thumbnail';
  }

  prevImage(): void {
    if (this.project && this.project.photos) {
      const currentIndex = this.project.photos.indexOf(this.selectedImage);
      if (currentIndex > 0) {
        this.selectedImage = this.project.photos[currentIndex - 1];
      } else {
        this.selectedImage = this.project.photos[this.project.photos.length - 1];
      }
      // Asegurarse de que el tipo se actualiza
      this.selectedType = 'photo';
      this.showDescriptionInput = false; // Ocultar el input al cambiar la imagen
    }
  }
  
  nextImage(): void {
    if (this.project && this.project.photos) {
      const currentIndex = this.project.photos.indexOf(this.selectedImage);
      if (currentIndex < this.project.photos.length - 1) {
        this.selectedImage = this.project.photos[currentIndex + 1];
      } else {
        this.selectedImage = this.project.photos[0];
      }
      // Asegurarse de que el tipo se actualiza
      this.selectedType = 'photo';
      this.showDescriptionInput = false; // Ocultar el input al cambiar la imagen
    }
  }
  
  
 }

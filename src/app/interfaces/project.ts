 
export interface Project {
    id?: number,
    name:string,
    description:string,
    role:string,
    features:string,
    technologies:string,                                     
    category:string,
    photos?: { id: number,nombreFo: string, data: string,description:string }[]; // Fotos asociadas
    thumbnail?: { fileName: string, data: string }; // Thumbnail del proyecto
  


}

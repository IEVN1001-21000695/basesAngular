import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
imagenWidth:number=50;
imagenMargin:Number=2;
muestraImg:boolean=true;
mostrarImagen():void{
  this.muestraImg=!this.muestraImg
}

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 puertas",
      "Year":2003,
      "Precio":120000,
      "Color":"Rojo",
      "ImagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/cc12bb6c50b6ff98695d616be92cb3183849636e/preview-928x522.jpg",
      "Marca":"Nissan"
    },
    {
      "ProductoId":2,
      "Modelo":"Versa",
      "Descripcion":"4 puertas",
      "Year":2009,
      "Precio":170000,
      "Color":"Negro",
      "ImagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/636e10d706be957feb8adb091f9de1c7ca348cfe/preview-928x522.jpg",
      "Marca":"Nissan"
    },
    {
      "ProductoId":3,
      "Modelo":"Mazda 2",
      "Descripcion":"2 puertas",
      "Year":1997,
      "Precio":30000,
      "Color":"Amarillo",
      "ImagenUrl":"https://www.mazda.mx/siteassets/mazda-mx/mycos-2024/mazda-mx-5/360/colores/rojo-brillante/mazda-mexico-mx-5-360-deportivo-rojo-v2-2.jpg",
      "Marca":"Mazda"
    },
  ]
  
}


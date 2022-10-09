import { Component, OnInit } from '@angular/core';

import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  imagenes:any[]=[];

  constructor(private imagePicker: ImagePicker) { }

  ngOnInit(){
    this.imagePicker.hasReadPermission().then((val)=>{
      if(val == false){
        this.imagePicker.requestReadPermission();
      }
    },(err)=>{
      this.imagePicker.requestReadPermission();
    })
  }

  abrirGaleria(){
    let options: ImagePickerOptions={
      maximumImagesCount:1,
      outputType:1
    }

    this.imagePicker.getPictures(options).then((resp)=>{
      for(var i=0; i<resp.length; i++){
        let base64deImagen = "data:image/png;base64,"+resp[i];
        this.imagenes.push(base64deImagen);
      }
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

}

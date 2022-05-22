import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


file: any = null;
title = 'pdf-lector-app';
fileName: string = '';


onHandleFile( event: any ) {
  console.log(event.target)

  event.preventDefault()
  this.file = event.target.files[0]
  if (this.file) {
    this.fileName = this.file.name;
  }
}
}

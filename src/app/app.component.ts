import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PdfService } from 'src/services/pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private pdfService: PdfService) {}

file: any = null;
title = 'pdf-lector-app';
fileName: string = '';
fileResult!: Observable<any> ;
isLoading: boolean = false;

onHandleFile( event: any ) {
  this.file = event.target.files[0]
  if (this.file) {
    this.fileName = this.file.name;
  }
}
async onSubmitFile(){
  this.isLoading = true
  const formData = new FormData()
  formData.append('pdf-file', this.file)
  this.fileResult = this.pdfService.extractPdf(formData);
 }
}
